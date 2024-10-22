import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='bg-teal-50 m-0 p-0 min-h-screen'>
    <App />
    </div>
  </StrictMode>,
)
