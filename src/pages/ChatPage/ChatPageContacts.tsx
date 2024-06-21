import { useDispatch } from 'react-redux'

import { Status } from '@shared/status'

import { selectChats } from '@redux/slices/chats/selectors'
import { setActiveChatWithContact } from '@redux/slices/chats/slice'
import { selectContacts } from '@redux/slices/contacts/selectors'

import useAppSelector from '@hooks/useAppSelector'

import { Contact } from '@components/Contact/Contact'

import { Alert } from '@mui/material'

import { Contact as ContactType } from '@entities/contact.type'

const CONTACTS_LOADING: ContactType[] = Array({ length: 3 }).map((_, index) => ({
	id: index,
	name: '',
	ru_name: '',
	isBot: true,
}))

export const ChatPageContacts = () => {
	const dispatch = useDispatch()

	const { statusContacts, messageContacts, contacts: _contacts } = useAppSelector(selectContacts)
	const { activeChatWithContact } = useAppSelector(selectChats)

	const isContactsError = statusContacts === Status.ERROR
	const isContactsLoading = statusContacts === Status.LOADING

	const contacts = isContactsLoading ? CONTACTS_LOADING : _contacts

	const handleClickSelectContact = (contact: ContactType) => () => {
		dispatch(setActiveChatWithContact(contact))
	}

	if (isContactsError) return <Alert> {messageContacts} </Alert>

	return (
		<nav className="chat-window__contacts">
			<h3 className="chat-window__contacts__title"> Чаты </h3>
			{contacts.map((contact) => {
				const { id, name, isBot } = contact
				const selectedContactId = activeChatWithContact?.id

				return (
					<Contact
						key={id}
						username={name}
						isBot={isBot}
						isLoading={isContactsLoading}
						onClick={handleClickSelectContact(contact)}
						className={`chat-window__contacts__contact ${selectedContactId === id && 'chat-window__contacts__contact--active'}`}
					/>
				)
			})}
		</nav>
	)
}
