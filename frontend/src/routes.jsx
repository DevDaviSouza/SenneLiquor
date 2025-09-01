import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { TicketPage } from './pages/ticket';

export const RouteComponent = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tickets' element={<TicketPage />} />
      </Routes>
    </Router>
  )
}