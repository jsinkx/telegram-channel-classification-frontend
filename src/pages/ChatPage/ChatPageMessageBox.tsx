import moment from 'moment'

import { Contact } from '@components/Contact/Contact'
import { Message } from '@components/Message/Message'

import SendIcon from '@mui/icons-material/Send'
import { IconButton } from '@mui/material'

import { WhiteBorderTextField } from './ChatPage.styles'

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

const MESSAGES_HISTORY = [
	{
		username: 'LSTM',
		textMessage: 'Добро пожаловать в бота!',
		time: moment(),
		isMe: false,
		isLoading: false,
	},
	{
		textMessage: 'Что ты можешь ботяра',
		time: moment(),
		isMe: true,
		isLoading: false,
	},
	{
		username: 'LSTM',
		textMessage:
			'Я могу все! Могу классифицировать текст, подобрать канал, получить распознавание голоса. Я непросто python бот LSTM, я скайнет',
		time: moment(),
		isMe: false,
		isLoading: false,
	},
	{
		username: 'LSTM',
		textMessage: 'Добро пожаловать в бота!',
		time: moment(),
		isMe: false,
		isLoading: false,
	},
	{
		textMessage: 'Что ты можешь ботяра',
		time: moment(),
		isMe: true,
		isLoading: false,
	},
	{
		username: 'LSTM',
		textMessage:
			'Я могу все! Могу классифицировать текст, подобрать канал, получить распознавание голоса. Я непросто python бот LSTM, я скайнет',
		time: moment(),
		isMe: false,
		isLoading: false,
	},
]

const isChatOpened = true

export const ChatPageMessageBox = () => {
	return (
		<section className="chat-window__chat">
			{!isChatOpened && <p className="chat-window__chat__select-chat">Выберите чат, чтобы начать общение</p>}
			{isChatOpened && (
				<>
					<div className="chat-window__chat__contact-info">
						<Contact
							key={CONTACTS[0]!.id}
							username={CONTACTS[0]!.name}
							isBot={CONTACTS[0]!.isBot}
							lastMessage={CONTACTS[0]!.lastMessage}
							lastMessageTime={moment(CONTACTS[0]!.time)}
						/>
					</div>
					<div className="chat-window__chat__messages-history">
						{MESSAGES_HISTORY.map((message, index) => (
							<Message
								// eslint-disable-next-line react/no-array-index-key
								key={index}
								username={message.username}
								time={moment(message.time)}
								textMessage={message.textMessage}
								isMe={message.isMe}
								isLoading={message.isLoading}
								className={`chat-window__chat__messages-history__message 
										${message.isMe && 'chat-window__chat__messages-history__message--me'}
											`}
							/>
						))}
					</div>
					<div className="chat-window__chat__input-message">
						<WhiteBorderTextField
							fullWidth
							placeholder="Введите сообщение"
							className="chat-window__chat__input-message__textfield"
						/>
						<IconButton className="chat-window__chat__input-message__send-button">
							<SendIcon />
						</IconButton>
					</div>
				</>
			)}
		</section>
	)
}
