import { ComponentPropsWithoutRef, FC, memo } from 'react'

import { Avatar as AvatarMUI } from '@mui/material'

import { StyledAvatar, StyledBadge } from './Avatar.styles'

type AvatarProps = {
	username?: string
	isDisplayStatus?: boolean
} & ComponentPropsWithoutRef<'div'>

export const Avatar: FC<AvatarProps> = memo(({ username = '', isDisplayStatus = false, ...props }) => {
	const avatarName = username.slice(0, 2)

	return (
		<StyledAvatar $username={username} {...props}>
			<StyledBadge
				overlap="circular"
				anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
				variant={isDisplayStatus ? 'dot' : 'standard'}
			>
				<AvatarMUI className="avatar-image">{avatarName}</AvatarMUI>
			</StyledBadge>
		</StyledAvatar>
	)
})
