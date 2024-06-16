import styled from 'styled-components'

import { Colors } from '@shared/colors'

type StyledMessageProps = {
	$isMe?: boolean
}

export const StyledMessage = styled.div<StyledMessageProps>`
	.message__user-info {
		margin-bottom: 5px;
		display: flex;
		align-items: center;
		user-select: none;

		&__avatar-image {
			margin-right: 10px;
		}
	}

	.message__time {
		margin-right: 7px;
	}

	.message__textMessage {
		padding: 15px;
		display: inline-flex;
		border-radius: 6px;
		background-color: ${Colors.DARK_BLUE_ELEMENT_BACKGROUND};
	}
`
