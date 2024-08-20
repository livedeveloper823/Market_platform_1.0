import './App.css'
import NotificationProvider from './contexts/NotificationContext'
import Routes from './routes'
import { JWTProvider as AuthProvider } from './contexts/JWTContext'

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <>
          <Routes />
        </>
      </NotificationProvider>
    </AuthProvider>
  )
}

export default App
