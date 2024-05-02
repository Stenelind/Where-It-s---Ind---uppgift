import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Eventticket from '../../components/eventticket/Eventticket';
import Counter from '../../components/counter/Counter';
import Button from '../../components/button/Button';
import useStore from '../../apistore';
import './event.css';

function Event() {
  const { eventName, eventPrice } = useParams();
  const { currentEvent, getEventByName } = useStore();

  useEffect(() => {
    getEventByName(decodeURIComponent(eventName));
  }, [eventName, getEventByName]);

  // Om currentEvent inte finns, visa laddningsskärmen först
  if (!currentEvent) {
    return <div>Loading event...</div>;
  }

  console.log("Event Price:", eventPrice); // Kontrollera priset här

  return (
    <>
      <h1 className="event-header">Event</h1>
      <p className="event-text">You are about to score <br/> some tickets to</p>
      <Eventticket event={currentEvent} />
      <Counter price={currentEvent.price} />
      <Button />
    </>
  );
}

export default Event;