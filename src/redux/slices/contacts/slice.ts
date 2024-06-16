import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { axiosInstance } from '@shared/axios'
import { Status } from '@shared/status'

import { ChatBotsInitialState, FetchContactsResult, GetClassifyResponse } from './types'

export const fetchContacts = createAsyncThunk<FetchContactsResult>(
	'fetchContacts	',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axiosInstance<GetClassifyResponse>('/classify')

			return data
				.map((bot) => ({
					...bot,
					isBot: true,
				}))
				.slice(1, data.length) // Hide first bot with id = -1 is a tokenizer
		} catch {
			const message = 'Не удалось получить контакты, обновите страницу'

			return rejectWithValue({
				message,
			})
		}
	},
)

const initialState: ChatBotsInitialState = {
	statusContacts: Status.INIT,
	messageContacts: '',
	contacts: [],
}

const contactsSlice = createSlice({
	name: 'contacts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchContacts.pending, (state) => {
				state.statusContacts = Status.LOADING
				state.messageContacts = ''
				state.contacts = []
			})
			.addCase(fetchContacts.fulfilled, (state, { payload }) => {
				state.statusContacts = Status.SUCCESS
				state.contacts = payload
			})
			.addCase(fetchContacts.rejected, (state, action) => {
				state.statusContacts = Status.ERROR
				state.messageContacts = action.error.message as string
				state.contacts = []
			})
	},
})

export const chatBotsReducer = contactsSlice.reducer

// export const {} = contactsSlice.actions
