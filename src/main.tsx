import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from './store'
import { MetaMaskProvider } from '@metamask/sdk-react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <MetaMaskProvider
          debug={false}
          sdkOptions={{
            dappMetadata: {
              name: "Example React Dapp",
              url: window.location.href,
            },
            infuraAPIKey: "3cf40b835db94770b6d0ca73ff0b4a50",
            // Other options.
          }}
        >
          <App />
        </MetaMaskProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
)
