import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalStyle } from './global.style.jsx'
import { ModalProvider } from './contexts/ModalContext.jsx'
import { AuthProvider } from './contexts/Auth.context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ModalProvider>
			<GlobalStyle />
			<AuthProvider>
				<App />
			</AuthProvider>
		</ModalProvider>
	</React.StrictMode>
)
