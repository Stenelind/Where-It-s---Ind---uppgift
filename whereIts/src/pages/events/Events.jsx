import Eventcard from '../../components/eventcard/Eventcard';
import Eventpager from '../../components/eventpager/Eventpager';
import Searchfield from '../../components/searchfield/Searchfield';
import { useSwipeable } from 'react-swipeable';
import { useNavigate } from 'react-router-dom';
import './events.css';

function Events() {
  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/Event'), // Navigera till Events när användaren swipar åt vänster
    onSwipedRight: () => navigate('/Events/'), // Ändra till din önskade route
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });
  return (
      <section {...handlers} className="swipe-area">
        <h1 className='events-header'>Events</h1>
        <Searchfield />
        <Eventcard />
        <Eventpager />
      </section>
  )
}

export default Events