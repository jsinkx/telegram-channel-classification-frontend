import { lazily } from 'react-lazily'
import { createBrowserRouter } from 'react-router-dom'

import { paths } from '@shared/paths'

import { ErrorBoundaryLayout } from '@layouts/ErrorBoundaryLayout/ErrorBoundaryLayout'

const { NotFoundPage } = lazily(
	() => import(/* webpackChunkName: "NotFoundPage" */ '@pages/NotFoundPage/NotFoundPage'),
)

const { ChatPage } = lazily(() => import(/* webpackChunkName: "ChatPage" */ '@pages/ChatPage/ChatPage'))

const routes = [
	{
		element: <ErrorBoundaryLayout />,
		children: [
			{
				path: paths.any,
				element: <NotFoundPage />,
			},
			{
				path: paths.chat,
				element: <ChatPage />,
			},
		],
	},
]

export const router = createBrowserRouter(routes)
