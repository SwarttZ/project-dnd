import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './screens/Home/home'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
