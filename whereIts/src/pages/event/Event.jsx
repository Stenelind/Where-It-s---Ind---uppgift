import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import useStore from '../../apistore';
import Eventticket from '../../components/eventticket/Eventticket';
import Counter from '../../components/counter/Counter';
import Button from '../../components/button/Button';
import './event.css';
import useOrderStore from '../../orderStore';

function Event() {
  const { eventName } = useParams();
  const { events, currentEvent, setCurrentEvent } = useStore();
  const [count, setCount] = useState(0);
  const { showOrderOverview, setShowOrderOverview } = useOrderStore(); // Hämta setShowOrderOverview
  
  const navigate = useNavigate();
  const handlers = useSwipeable({
    onSwipedLeft: () => navigate('/Order'), 
    onSwipedRight: () => navigate('/Events/'), 
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  useEffect(() => {
    const event = events.find(e => e.name === decodeURIComponent(eventName));
    if (event) {
      setCurrentEvent(event);
    }
  }, [eventName, events, setCurrentEvent]);

  const handleButtonClick = () => {
    if (showOrderOverview || count === 0) {
      navigate('/order', { state: { orderCount: count, event: currentEvent } });
    } else {
      setShowOrderOverview(true);
      navigate('/order');
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  if (!currentEvent) {
    return <section className="event-loader">Loading event information...</section>;
  }

  return (
      <section {...handlers} className="swipe-area">
        <h1 className="event-header">Event</h1>
        <p className="event-text">You are about to score <br /> some tickets to</p>
        <Eventticket event={currentEvent} />
        <Counter price={currentEvent.price} eventId={currentEvent.id} count={count} setCount={setCount} increment={increment} decrement={decrement} />
        <Button onClick={handleButtonClick} />
      </section>
  );
}

export default Event;