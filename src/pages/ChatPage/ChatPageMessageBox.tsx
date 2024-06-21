import { ChangeEventHandler, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import moment from 'moment'

import { Status } from '@shared/status'

import { selectChats } from '@redux/slices/chats/selectors'
import { fetchClassifyMessage, setMessageWithContact } from '@redux/slices/chats/slice'

import useAppDispatch from '@hooks/useAppDispatch'
import useAppSelector from '@hooks/useAppSelector'

import { Contact } from '@components/Contact/Contact'
import { Message } from '@components/Message/Message'

import SendIcon from '@mui/icons-material/Send'
import { IconButton } from '@mui/material'

import { WhiteBorderTextField } from './ChatPage.styles'

export const ChatPageMessageBox = () => {
	const asyncDispatch = useAppDispatch()
	const dispatch = useDispatch()

	const sendMessageButtonRef = useRef<HTMLButtonElement>(null)
	const chatBoxMessagesHistoryRef = useRef<HTMLDivElement>(null)

	const { status, activeChatWithContact, messagesWithContact } = useAppSelector(selectChats)

	const [isShiftPressedInputMessage, setIsShiftPressedInputMessage] = useState(false)

	const isChatOpened = activeChatWithContact !== null
	const currentContact = activeChatWithContact?.name ? messagesWithContact[activeChatWithContact.id]! : null

	const isSendMessageButtonDisabled = currentContact?.messageDraft === '' || !currentContact

	const isCurrentContactTyping = status[activeChatWithContact?.id!] === Status.LOADING

	const scrollToBottom = () => {
		const messagesHistoryRef = chatBoxMessagesHistoryRef.current
		if (messagesHistoryRef) {
			messagesHistoryRef.scrollTo({
				top: messagesHistoryRef.scrollHeight,
				behavior: 'smooth',
			})
		}
	}

	const handleKeyDownInputMessage = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (!isShiftPressedInputMessage) {
			if (event.key === 'Shift') setIsShiftPressedInputMessage(true)

			if (event.key === 'Enter' && sendMessageButtonRef.current) {
				sendMessageButtonRef.current.click()
			}
		}
	}

	const handleKeyUpInputMessage = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Shift') {
			setIsShiftPressedInputMessage(false)
		}
	}

	const handleChangeInputMessage: ChangeEventHandler<HTMLInputElement> = (event) => {
		dispatch(
			setMessageWithContact({
				contact: activeChatWithContact!,
				message: event.target.value,
			}),
		)
	}

	const handleSendMessage = () => {
		const params = {
			model_id: activeChatWithContact!.id,
			text: currentContact!.messageDraft,
		}

		scrollToBottom()

		asyncDispatch(fetchClassifyMessage(params))
	}

	return (
		<section className="chat-window__chat">
			{!isChatOpened && <p className="chat-window__chat__select-chat">Выберите чат, чтобы начать общение</p>}
			{isChatOpened && (
				<>
					<div className="chat-window__chat__contact-info">
						<Contact
							key={activeChatWithContact.id}
							username={activeChatWithContact.name}
							isBot={activeChatWithContact.isBot}
						/>
					</div>
					{isChatOpened && !!activeChatWithContact && !currentContact?.messagesHistory.length && (
						<p className="chat-window__chat__select-chat"> Начните общение с {activeChatWithContact.name} </p>
					)}
					<div ref={chatBoxMessagesHistoryRef} className="chat-window__chat__messages-history">
						{currentContact?.messagesHistory.map(({ message, isMe, createdAt, attachments }, index) => (
							<Message
								// eslint-disable-next-line react/no-array-index-key
								key={index}
								username={activeChatWithContact.name}
								createdAt={moment(createdAt)}
								attachments={attachments}
								textMessage={message}
								isMe={!!isMe}
								className={`chat-window__chat__messages-history__message 
										${isMe && 'chat-window__chat__messages-history__message--me'}
											`}
							/>
						))}
						{isCurrentContactTyping && (
							<Message
								username={activeChatWithContact.name}
								textMessage=""
								isMe={false}
								isLoading
								className="chat-window__chat__messages-history__message"
							/>
						)}
					</div>
					<div className="chat-window__chat__input-message">
						<WhiteBorderTextField
							fullWidth
							multiline
							rows={currentContact?.messageDraft.trim() === '' ? 1 : 4}
							value={currentContact?.messageDraft || ''}
							onChange={handleChangeInputMessage}
							onKeyDown={handleKeyDownInputMessage}
							onKeyUp={handleKeyUpInputMessage}
							placeholder="Введите сообщение"
							className="chat-window__chat__input-message__textfield"
							sx={{
								'& .MuiInputBase-root': {
									height: '100%',
									display: 'flex',
									alignItems: 'start',
								},
							}}
						/>
						<IconButton
							ref={sendMessageButtonRef}
							onClick={handleSendMessage}
							disabled={isSendMessageButtonDisabled}
							className="chat-window__chat__input-message__send-button"
						>
							<SendIcon />
						</IconButton>
					</div>
				</>
			)}
		</section>
	)
}
