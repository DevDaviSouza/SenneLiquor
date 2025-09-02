import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouteComponent } from './routes'
import Provider from './context/Provider'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
     <RouteComponent />
    </Provider>
  </StrictMode>,
)
