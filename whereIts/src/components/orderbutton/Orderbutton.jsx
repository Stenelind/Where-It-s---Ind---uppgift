// Orderbutton.jsx
import React, { useState, useEffect } from 'react';
import './orderbutton.css';
import useOrderStore from '../../orderStore'; 
import { useNavigate } from 'react-router-dom';

function Orderbutton() { 
  const [orderPlaced, setOrderPlaced] = useState(false); // State för att hålla reda på om ordern har placerats
  const navigate = useNavigate(); // Använd useNavigate för att navigera

  const handleOrderButtonClick = () => {
    const orderedEvents = useOrderStore.getState().orderedEvents;
    if (orderedEvents.length > 0) {
      // Navigera och skicka orderedEvents som state
      navigate('/tickets', { state: { orderedEvents } });
      setOrderPlaced(true); // Sätt ordern till placerad
    } else {
      window.alert('Your order is empty.');
    }
  };

  // Använd useEffect för att navigera till biljettsidan när ordern är placerad
  useEffect(() => {
    if (orderPlaced) {
      navigate('/tickets');
    }
  }, [orderPlaced, navigate]);

  return (
    <section className="orderbutton-container">
      <button className='orderbutton' onClick={handleOrderButtonClick}>Skicka order</button>
    </section>
  );
}

export default Orderbutton;
