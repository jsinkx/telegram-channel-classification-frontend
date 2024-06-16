import { Status } from '@shared/status'

import { Contact } from '@entities/contact.type'
import { Message } from '@entities/message.type'

export type PostClassifyRequest = {
	model_id: number
	text: string
}

export type PostClassifyResponse = {
	model_name: string
	model_ru_name: string
	predicted_class: string
	predicted_probabilities: [number, number, number]
	success: boolean
	text: string
}
export type FetchClassifyMessageParams = PostClassifyRequest

export type FetchClassifyMessageResult = Message

export type MessagesWithContact = {
	[key: number]: {
		messageDraft: string
		messagesHistory: Message[]
	}
}

export type ChatBotsInitialState = {
	status: {
		[key: number]: Status
	}
	activeChatWithContact: Contact | null
	messagesWithContact: MessagesWithContact
}
