import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import  TicketPage from './pages/ticket';
import Maps from './pages/Maps';


export const RouteComponent = () => {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tickets' element={<TicketPage />} />
        <Route path='/maps' element={<Maps />} />
      </Routes>
    </Router>
  )
}