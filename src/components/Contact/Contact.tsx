import { ComponentPropsWithoutRef, FC, memo } from 'react'

import { Moment } from 'moment'

import { Avatar } from '@components/Avatar/Avatar'

import { StyledContact } from './Contact.styles'

type ContactProps = {
	username: string
	isBot: boolean
	lastMessage: string
	lastMessageTime: Moment
} & ComponentPropsWithoutRef<'div'>

export const Contact: FC<ContactProps> = memo(
	({ username, isBot, lastMessage, lastMessageTime, ...props }) => {
		return (
			<StyledContact {...props}>
				<div className="contact__avatar">
					<Avatar isDisplayStatus username={username} className="contact__avatar__image" />
				</div>
				<div className="contact__message-info">
					<h5 className="contact__message-info__username">
						<span className="contact__message-info__username--text"> {username}</span>
						{isBot && <span className="contact__message-info__username--bot">Бот</span>}
					</h5>
					{/* <p className="contact__message-info__last-message"> {lastMessage} </p>
				<p className="contact__message-info__last-message--time"> {lastMessageTime.format('HH:mm')}</p> */}
				</div>
			</StyledContact>
		)
	},
)
