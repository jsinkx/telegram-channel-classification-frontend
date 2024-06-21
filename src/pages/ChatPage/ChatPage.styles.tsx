import styled from 'styled-components'

import { Colors } from '@shared/colors'

import { TextField } from '@mui/material'

const BORDER_COLOR = Colors.DARK_BLUE_BACKGROUND

export const WhiteBorderTextField = styled(TextField)`
	& label.Mui-focused {
		color: ${Colors.WHITE_SELECTION};
	}

	& .MuiOutlinedInput-root {
		&.Mui-focused fieldset {
			border-color: ${Colors.WHITE_SELECTION};
		}
	}
`

export const StyledChatPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;

	.chat-window {
		width: 90%;
		min-height: 500px;
		margin-top: 5vh;
		margin-inline: auto;
		display: flex;
		background-color: ${Colors.DARK_BLUE_BACKGROUND_HIGHLIGHT};
		border-radius: 6px;

		&__contacts {
			width: 370px;
			border-right: 2px solid ${BORDER_COLOR};

			&__title {
				height: 40px;
				margin-block: 0;
				padding-block: 20px 0;
				padding-left: 20px;
				font-size: 1.3em;
				border-bottom: 2px solid ${BORDER_COLOR};
				user-select: none;
			}

			&__contact {
				padding-block: 15px;
				padding-left: 20px;
				transition: all 0.3s ease;
				cursor: pointer;

				&--active {
					background-color: ${Colors.DARK_BLUE_ELEMENT_BACKGROUND};
				}

				&:hover {
					background-color: ${Colors.DARK_BLUE_ELEMENT_BACKGROUND};
				}
			}
		}

		&__chat {
			width: 100%;
			min-height: 100%;
			display: flex;
			flex-direction: column;

			&__select-chat {
				width: 90%;
				margin-top: 200px;
				margin-inline: auto;
				padding: 8px 5px;
				display: block;
				border-radius: 6px;
				text-align: center;
				background-color: ${Colors.DARK_BLUE_BACKGROUND};
				user-select: none;
			}

			&__contact-info {
				border-bottom: 2px solid ${BORDER_COLOR};
			}

			&__messages-history {
				height: 100%;
				max-height: 700px;
				overflow-y: scroll;

				&__message {
					margin-block: 25px;
					margin-inline: 15px;

					&--me {
						display: flex;
						flex-direction: column;
						justify-content: flex-end;
						align-items: flex-end;
					}
				}
			}

			&__input-message {
				padding: 10px;
				display: flex;
				align-items: center;
				justify-content: center;
				flex: 1 0 auto;
				border-top: 2px solid ${BORDER_COLOR};

				&__textfield {
				}

				&__send-button {
					width: 30px;
					height: 30px;
					margin-left: 10px;
					padding: 10px;
				}
			}
		}
	}
`
