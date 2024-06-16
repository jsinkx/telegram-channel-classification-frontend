import { ComponentPropsWithoutRef, FC } from 'react'

import { Moment } from 'moment'

import { Avatar } from '@components/Avatar/Avatar'

import { StyledMessage } from './Message.styles'

type MessageProps = {
	username?: string | undefined
	time: Moment
	textMessage: string
	isMe?: boolean
	isLoading?: boolean
} & ComponentPropsWithoutRef<'div'>

export const Message: FC<MessageProps> = ({ username, time, textMessage, isMe, isLoading, ...props }) => {
	return (
		<StyledMessage $isMe={!!isMe} {...props}>
			<div className="message__user-info">
				{!isMe && <Avatar username={username || ''} className="message__user-info__avatar-image" />}
				{!isMe && (
					<p className="message__user-info__username">
						<b>{username}</b>, {time.format('HH:mm')}
					</p>
				)}
			</div>
			{isMe && <p className="message__time"> {time.format('HH:mm')}</p>}
			<div className="message__textMessage"> {isLoading ? '...' : textMessage} </div>
		</StyledMessage>
	)
}
