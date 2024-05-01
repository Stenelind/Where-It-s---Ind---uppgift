import './index.css'
import './App.css'
import Landingpage from './pages/landingpage/Landingpage';
import Events from './pages/events/Events';
import Event from './pages/event/Event';
import Order from './pages/order/Order';


function App() {

  return (
 
      <div className="app">
        <Landingpage />
        <Events />
        <Event />
        <Order /> 
      </div>
  )
}

export default App;