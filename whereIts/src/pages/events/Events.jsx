import Eventcard from '../../components/eventcard/Eventcard';
import Eventpager from '../../components/eventpager/Eventpager';
import Searchfield from '../../components/searchfield/Searchfield';
import './events.css';

function Events() {
  return (
    <>
    <h1 className='events-header'>Events</h1>
    <Searchfield />
    <Eventcard />
    <Eventpager />
    </>
  )
}

export default Events