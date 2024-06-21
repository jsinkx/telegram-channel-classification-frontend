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

		&__username {
			&--me {
				margin-right: 1px;
				margin-bottom: 3px;
			}
		}
	}

	.message__textMessage {
		max-width: 90%;
		padding: 15px;
		display: inline-flex;
		flex-direction: column;
		border-radius: 6px;
		background-color: ${Colors.DARK_BLUE_ELEMENT_BACKGROUND};

		&__attachment--chart {
			margin-top: 15px;
		}
	}
`
