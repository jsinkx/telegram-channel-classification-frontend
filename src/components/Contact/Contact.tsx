import { ComponentPropsWithoutRef, FC, memo } from 'react'

import { Avatar } from '@components/Avatar/Avatar'

import { Skeleton } from '@mui/material'

import { StyledContact } from './Contact.styles'

type ContactProps = {
	username: string
	isBot: boolean
	isLoading?: boolean
} & ComponentPropsWithoutRef<'div'>

export const Contact: FC<ContactProps> = memo(({ username, isBot, isLoading, ...props }) => {
	return (
		<StyledContact {...props}>
			{isLoading ? (
				<Skeleton variant="circular" width={40} height={40} />
			) : (
				<>
					<div className="contact__avatar">
						<Avatar isDisplayStatus username={username} className="contact__avatar__image" />
					</div>
					<div className="contact__message-info">
						<h5 className="contact__message-info__username">
							<span className="contact__message-info__username--text"> {username}</span>
							{isBot && <span className="contact__message-info__username--bot">Бот</span>}
						</h5>
					</div>
				</>
			)}
		</StyledContact>
	)
})
