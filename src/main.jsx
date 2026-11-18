import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import NotificationProvider from './features/notifikasi/NotificationProvider'
import SubmissionProvider from './features/detail-tugas/SubmissionProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NotificationProvider>
        <SubmissionProvider>
          <App />
        </SubmissionProvider>
      </NotificationProvider>
    </BrowserRouter>
  </StrictMode>,
)
