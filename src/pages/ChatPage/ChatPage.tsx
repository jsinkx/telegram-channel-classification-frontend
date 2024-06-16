import { useEffect } from 'react'

import { fetchContacts } from '@redux/slices/contacts/slice'

import useAppDispatch from '@hooks/useAppDispatch'

import { StyledChatPage } from './ChatPage.styles'
import { ChatPageContacts } from './ChatPageContacts'
import { ChatPageMessageBox } from './ChatPageMessageBox'

export const ChatPage = () => {
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchContacts())
	}, [dispatch])

	return (
		<StyledChatPage>
			<div className="chat-window">
				<ChatPageContacts />
				<ChatPageMessageBox />
			</div>
		</StyledChatPage>
	)
}
