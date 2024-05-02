import './index.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Events from './pages/events/Events';
import Event from './pages/event/Event';

function App() {
  return (
    <Router>
      <div className="app">
 <Routes>
          <Route path="/" element={<Outlet />}> {/* Här lägger vi till Outlet */}
            <Route index element={<Events />} /> {/* Här används index för att specificera rutan för '/' */}
            <Route path="event/:eventName" element={<Event />} />
          </Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App;