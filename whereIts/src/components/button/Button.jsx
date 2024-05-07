import React from 'react';
import './button.css';
import useOrderStore from '../../orderStore';
import useStore from '../../apistore';
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate();
  const { currentEvent, resetCount } = useStore(); // Hämta resetCount från useStore
  const orderedEvents = useOrderStore(state => state.orderedEvents);

  const handleButtonClick = () => {
    if (!currentEvent) {
      console.log("No event selected");
      return;
    }

    const isEventInOrder = orderedEvents.some((orderedEvent) => orderedEvent.id === currentEvent.id);
    if (isEventInOrder) {
      window.alert('Detta event finns redan i din order.');
    } else {
      useOrderStore.setState(state => ({
        orderedEvents: [...state.orderedEvents, currentEvent]
      }));
      
      resetCount(); // Använd resetCount för att återställa count
      navigate('/order');
    }
  };

  return (
    <section className="button-container">
      <button className='button' onClick={handleButtonClick}>Lägg i varukorgen</button>
    </section>
  );
}

export default Button;
