import { StyledChatPage } from './ChatPage.styles'
import { ChatPageContacts } from './ChatPageContacts'
import { ChatPageMessageBox } from './ChatPageMessageBox'

export const ChatPage = () => {
	return (
		<StyledChatPage>
			<div className="chat-window">
				<ChatPageContacts />
				<ChatPageMessageBox />
			</div>
		</StyledChatPage>
	)
}
