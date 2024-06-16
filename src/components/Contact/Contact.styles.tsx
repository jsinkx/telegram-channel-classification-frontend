import styled from 'styled-components'

import { Colors } from '@shared/colors'

export const StyledContact = styled.div`
	padding: 10px;
	display: flex;
	align-items: center;
	font-size: 1.2em;

	.contact__avatar {
		margin-right: 10px;

		&__image {
			color: ${Colors.WHITE};
		}
	}

	.contact__message-info {
		display: flex;
		flex-direction: column;

		&__username {
			margin: 0;
			user-select: none;

			&--text {
				margin-right: 5px;
			}

			&--bot {
				padding-inline: 2px;
				border-radius: 4px;
				background: linear-gradient(50deg, ${Colors.EXTRA_LIGHT_BLUE}, ${Colors.EXTRA_LIGHT_DARK_BLUE});
			}
		}

		&__last-message {
			margin: 0;

			&-time {
				margin: 0;
			}
		}
	}
`
