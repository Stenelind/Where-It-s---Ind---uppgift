import Event from '../../components/event/Event';
import Eventpager from '../../components/eventpager/Eventpager';
import Searchfield from '../../components/searchfield/Searchfield';
import './events.css';

function Events() {
  return (
    <>
    <h1 className='events-header'>Events</h1>
    <Searchfield />
    <Event />
    <Eventpager />
    </>
  )
}

export default Events