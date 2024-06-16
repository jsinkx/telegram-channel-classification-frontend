import moment from 'moment'

import { Contact } from '@components/Contact/Contact'

const CONTACTS = [
	{
		id: 1,
		name: 'LSTM',
		isBot: true,
		lastMessage: 'Добро пожаловать в бота!',
		time: moment(),
		isActive: true,
	},
	{
		id: 2,
		name: 'LSTM',
		isBot: true,
		lastMessage: 'Добро пожаловать в бота!',
		time: moment(),
	},
	{
		id: 3,
		name: 'LSTM',
		isBot: true,
		lastMessage: 'Добро пожаловать в бота!',
		time: moment(),
	},
]

export const ChatPageContacts = () => {
	return (
		<nav className="chat-window__contacts">
			<h3 className="chat-window__contacts__title"> Чат </h3>
			{CONTACTS.map((contact) => (
				<Contact
					key={contact.id}
					username={contact.name}
					isBot={contact.isBot}
					lastMessage={contact.lastMessage}
					lastMessageTime={moment(contact.time)}
					className={`chat-window__contacts__contact ${contact?.isActive && 'chat-window__contacts__contact--active'}`}
				/>
			))}
		</nav>
	)
}
