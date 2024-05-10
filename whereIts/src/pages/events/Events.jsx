import Eventcard from '../../components/eventcard/Eventcard';
import Searchfield from '../../components/searchfield/Searchfield';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';
import './events.css';

function Events() {
  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/tickets'), 
    onSwipedRight: () => navigate('/'), 
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  return (
      <section {...handlers} className="swipe-area">
        <h1 className='events-header'>Events</h1>
        <Searchfield />
        <Eventcard />
      </section>
  )
}

export default Events