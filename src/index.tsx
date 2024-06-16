import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/es/integration/react'

import { persistor, store } from '@redux/store'

import { App } from '@components/App/App'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<App />
			</PersistGate>
		</Provider>
	</StrictMode>,
)
