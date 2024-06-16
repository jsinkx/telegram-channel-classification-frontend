import { Status } from '@shared/status'

import { Contact } from '@entities/contact.type'

export type GetClassifyResponse = {
	id: number
	name: string
	ru_name: string
}[]

export type FetchContactsResult = Contact[]

export type ChatBotsInitialState = {
	statusContacts: Status
	messageContacts: string
	contacts: Contact[]
}
