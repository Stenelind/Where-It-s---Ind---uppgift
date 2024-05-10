import './index.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Landingpage from './pages/landingpage/Landingpage';
import Events from './pages/events/Events';
import Event from './pages/event/Event';
import Order from './pages/order/Order';
import Tickets from './pages/tickets/Tickets';

function App() {
  return (
<Router>
  <div className="app">
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/events" element={<Outlet />}>
        <Route index element={<Events />} />
        <Route path="event/:eventName" element={<Event />} />
      </Route>
      <Route path="/order" element={<Order />} />
      <Route path="/tickets" element={<Tickets />} />
    </Routes>
  </div>
</Router>
  )
}

export default App;