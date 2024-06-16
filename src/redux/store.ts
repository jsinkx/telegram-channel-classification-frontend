import { configureStore } from '@reduxjs/toolkit'

import { IS_PROD } from '@shared/constants'

export const store = configureStore({
	reducer: {},
	devTools: !IS_PROD,
})
