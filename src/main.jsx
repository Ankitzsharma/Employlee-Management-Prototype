import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import TaskList from './components/TaskList/TaskList.jsx'
import AuthProvider from './context/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </StrictMode>,
)
