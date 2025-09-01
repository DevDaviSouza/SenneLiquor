import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouteComponent } from './routes'
import { HeaderComponent } from './components/Header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderComponent />
    <RouteComponent />
  </StrictMode>,
)
