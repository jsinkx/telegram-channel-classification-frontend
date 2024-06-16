import { AxiosResponse } from 'axios'
import moment from 'moment'

import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { axiosInstance } from '@shared/axios'
import { Status } from '@shared/status'

import { Contact } from '@entities/contact.type'

import {
	ChatBotsInitialState,
	FetchClassifyMessageParams,
	FetchClassifyMessageResult,
	PostClassifyRequest,
	PostClassifyResponse,
} from './types'

export const fetchClassifyMessage = createAsyncThunk<FetchClassifyMessageResult, FetchClassifyMessageParams>(
	'fetchClassifyMessage	',
	async (params, { rejectWithValue }) => {
		try {
			const { data } = await axiosInstance.post<
				PostClassifyResponse,
				AxiosResponse<PostClassifyResponse>,
				PostClassifyRequest
			>('/classify', params)

			const message = {
				username: data.model_name,
				message: `Похоже на канал ${data.predicted_class}`,
				attachments: {
					chart: data.predicted_probabilities,
				},
				isBot: true,
				isMe: false,
				createdAt: moment().toString(),
			}

			return message
		} catch {
			const message = `Не удалось классифицировать сообщение "${params.text}"`

			return rejectWithValue({
				message,
			})
		}
	},
)

const initialState: ChatBotsInitialState = {
	status: {},
	activeChatWithContact: null,
	messagesWithContact: {},
}

const chatsSlice = createSlice({
	name: 'chats',
	initialState,
	reducers: {
		setActiveChatWithContact(state, action: PayloadAction<Contact>) {
			state.activeChatWithContact = action.payload
		},
		setMessageWithContact(
			state,
			action: PayloadAction<{
				contact: Contact
				message: string
			}>,
		) {
			state.messagesWithContact = {
				...state.messagesWithContact,
				[action.payload.contact.id]: {
					messageDraft: action.payload.message,
					messagesHistory: state.messagesWithContact[action.payload.contact.id]?.messagesHistory || [],
				},
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchClassifyMessage.pending, (state, action) => {
				const message = {
					message: action.meta.arg.text,
					isBot: false,
					isMe: true,
					createdAt: moment().toString(),
				}

				state.status = {
					...state.status,
					[action.meta.arg.model_id]: Status.LOADING,
				}

				state.messagesWithContact = {
					...state.messagesWithContact,
					[action.meta.arg.model_id]: {
						messageDraft: '',
						messagesHistory: [
							...(state.messagesWithContact[action.meta.arg.model_id]?.messagesHistory || []),
							message,
						],
					},
				}
			})
			.addCase(fetchClassifyMessage.fulfilled, (state, action) => {
				const message = action.payload

				state.status = {
					...state.status,
					[action.meta.arg.model_id]: Status.SUCCESS,
				}

				state.messagesWithContact = {
					...state.messagesWithContact,
					[action.meta.arg.model_id]: {
						messageDraft: state.messagesWithContact[action.meta.arg.model_id]?.messageDraft || '',
						messagesHistory: [
							...(state.messagesWithContact[action.meta.arg.model_id]?.messagesHistory || []),
							message,
						],
					},
				}
			})
			.addCase(fetchClassifyMessage.rejected, (state, action) => {
				const message = {
					message: action.error.message as string,
					isBot: true,
					isMe: false,
					createdAt: moment().toString(),
				}

				state.status = {
					...state.status,
					[action.meta.arg.model_id]: Status.ERROR,
				}

				state.messagesWithContact = {
					...state.messagesWithContact,
					[action.meta.arg.model_id]: {
						messageDraft: state.messagesWithContact[action.meta.arg.model_id]?.messageDraft || '',
						messagesHistory: [
							...(state.messagesWithContact[action.meta.arg.model_id]?.messagesHistory || []),
							message,
						],
					},
				}
			})
	},
})

export const chatsReducer = chatsSlice.reducer

export const { setActiveChatWithContact, setMessageWithContact } = chatsSlice.actions
