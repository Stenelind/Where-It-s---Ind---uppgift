import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Eventticket from '../../components/eventticket/Eventticket';
import Counter from '../../components/counter/Counter';
import Button from '../../components/button/Button';
import useStore from '../../apistore';
import './event.css';

function Event() {
  const { eventName } = useParams();
  const navigate = useNavigate(); 
  const { events, currentEvent, setCurrentEvent } = useStore(); 
  const [count, setCount] = useState(0);


  const handleButtonClick = () => {
    navigate('/order', { state: { orderCount: count, event: currentEvent } });
  };

  useEffect(() => {
    const event = events.find(e => e.name === decodeURIComponent(eventName));
    if(event) {
      setCurrentEvent(event);
    }
  }, [eventName, events, setCurrentEvent]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  if (!currentEvent) {
    return <div>Laddar eventinformation...</div>; 
  }

  return (
    <>
      <h1 className="event-header">Event</h1>
      <p className="event-text">You are about to score <br/> some tickets to</p>
      <Eventticket event={currentEvent} />
      <Counter price={currentEvent.price} count={count} setCount={setCount} increment={increment} decrement={decrement}/>
      <Button onClick={handleButtonClick} /> 
    </>
  );
}

export default Event;