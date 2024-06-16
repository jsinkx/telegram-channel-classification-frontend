export type Message = {
	username?: string
	message: string
	attachments?: {
		chart?: number[]
	}
	isBot: boolean
	isMe?: boolean
	createdAt: string
}
