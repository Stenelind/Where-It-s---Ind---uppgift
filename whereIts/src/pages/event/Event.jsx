import Button from '../../components/button/Button'
import Counter from '../../components/counter/Counter'
import Eventticket from '../../components/eventticket/Eventticket'
import './event.css'

function Event() {
  return (
    <>
    <h1 className="event-header">Event</h1>
    <p className="event-text">You are about to score <br/> some tickets to</p>
    <Eventticket />
    <Counter />
    <Button />
    </>
  )
}

export default Event