import React from 'react';
import './button.css';
import useOrderStore from '../../orderStore';
import useStore from '../../apistore';
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate();
  const { currentEvent, resetCount } = useStore(); 
  const orderedEvents = useOrderStore(state => state.orderedEvents || []); // Säkerställ att orderedEvents är en array

  const handleButtonClick = () => {
    if (!currentEvent) {
      console.log("No event selected");
      return;
    }

    // Hämta orderedEvents från state
    const isEventInOrder = orderedEvents.some((orderedEvent) => orderedEvent.id === currentEvent.id);
    if (isEventInOrder) {
      window.alert('Detta event finns redan i din order.');
    } else {
      useOrderStore.setState(state => ({
        orderedEvents: [...state.orderedEvents, currentEvent]
      }));
      
      resetCount(); 
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
