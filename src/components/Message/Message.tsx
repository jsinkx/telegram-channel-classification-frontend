import { ComponentPropsWithoutRef, FC } from 'react'
import { TypeAnimation } from 'react-type-animation'

import { Moment } from 'moment'

import { Avatar } from '@components/Avatar/Avatar'
import { PieChart } from '@components/PieChart/PieChart'

import { StyledMessage } from './Message.styles'

type MessageProps = {
	username?: string | undefined
	createdAt?: Moment
	textMessage: string
	attachments?:
		| {
				chart?: number[]
		  }
		| undefined
	isMe?: boolean
	isLoading?: boolean
} & ComponentPropsWithoutRef<'div'>

export const Message: FC<MessageProps> = ({
	username,
	createdAt,
	textMessage,
	attachments,
	isMe,
	isLoading,
	...props
}) => {
	const isToday = createdAt?.isSame(new Date(), 'day')
	const momentFormat = isToday ? 'HH:mm A' : 'DD.MM, HH:mm A'

	return (
		<StyledMessage $isMe={!!isMe} {...props}>
			<div className="message__user-info">
				{!isMe && <Avatar username={username || ''} className="message__user-info__avatar-image" />}
				{!isMe && (
					<p className="message__user-info__username">
						<b>{username}</b>
						{!isLoading && <>, {createdAt?.format(momentFormat)}</>}
					</p>
				)}
			</div>
			{isMe && <p className="message__time"> {createdAt?.format(momentFormat)}</p>}
			<div className="message__textMessage">
				{isLoading ? (
					<TypeAnimation
						sequence={['...', 100, '..', 100, '.', 100, '...', 100]}
						speed={50}
						style={{ fontSize: '2em' }}
						repeat={Infinity}
					/>
				) : (
					<>
						{textMessage}
						{attachments?.chart && (
							<PieChart data={attachments.chart} className="message__textMessage__attachment--chart" />
						)}
					</>
				)}
			</div>
		</StyledMessage>
	)
}
