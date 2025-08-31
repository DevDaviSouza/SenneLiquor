import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouteComponent } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouteComponent />
  </StrictMode>,
)
