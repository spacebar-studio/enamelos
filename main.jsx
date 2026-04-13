import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EnamelOS from './EnamelOS.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EnamelOS />
  </StrictMode>
)
