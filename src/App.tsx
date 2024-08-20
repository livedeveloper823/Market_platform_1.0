import './App.css'
import NotificationProvider from './contexts/NotificationContext'
import Routes from './routes'
import { JWTProvider as AuthProvider } from './contexts/JWTContext'
import { MetamaskProvider } from './contexts/useMetamask'

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <>
          <MetamaskProvider>
            <Routes />
          </MetamaskProvider>
        </>
      </NotificationProvider>
    </AuthProvider>
  )
}

export default App
