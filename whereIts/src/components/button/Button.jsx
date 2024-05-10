import React from 'react';
import './button.css';
import useOrderStore from '../../orderStore';
import useStore from '../../apistore';
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate();
  const { currentEvent, resetCount } = useStore();
  const { orderedEvents } = useOrderStore(); 

  const handleButtonClick = () => {
    console.log('Current Event:', currentEvent);
    console.log('Ordered Events:', orderedEvents);

    if (!currentEvent) {
      console.log("No event selected");
      return;
    }

    // Kontrollera om ordern är tom
    if (orderedEvents.length === 0 || !orderedEvents.some((orderedEvent) => orderedEvent.id === currentEvent.id)) {
      // Lägg till evenemanget om ordern är tom eller om evenemanget inte redan finns i ordern
      useOrderStore.setState(state => ({
        orderedEvents: [...state.orderedEvents, currentEvent]
      }));
      resetCount(); // Nollställ räknaren
      navigate('/order'); // Navigera till order
    } else {
      // Om evenemanget redan finns i ordern, visa ett felmeddelande
      window.alert('Detta event finns redan i din order.');
    }
  };

  return (
    <section className="button-container">
      <button className='button' onClick={handleButtonClick}>Lägg i varukorgen</button>
    </section>
  );
}

export default Button;