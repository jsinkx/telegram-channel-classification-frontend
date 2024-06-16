import styled from 'styled-components'

import { Colors } from '@shared/colors'

import { generateColorByString } from '@utils/generate-color-by-string'

import { Badge } from '@mui/material'
import { styled as styledMUI } from '@mui/material/styles'

type StyledAvatarProps = {
	$username: string
}

export const StyledBadge = styledMUI(Badge)(({ theme }) => ({
	'& .MuiBadge-badge': {
		backgroundColor: '#44b700',
		color: '#44b700',
		boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
		'&::after': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			borderRadius: '50%',
			animation: 'ripple 1.2s infinite ease-in-out',
			border: '1px solid currentColor',
			content: '""',
		},
	},
	'@keyframes ripple': {
		'0%': {
			transform: 'scale(.8)',
			opacity: 1,
		},
		'100%': {
			transform: 'scale(2.4)',
			opacity: 0,
		},
	},
}))

export const StyledAvatar = styled.div<StyledAvatarProps>`
	.avatar-image {
		color: ${Colors.WHITE};
		background-color: ${({ $username }) => generateColorByString($username)};
	}
`
