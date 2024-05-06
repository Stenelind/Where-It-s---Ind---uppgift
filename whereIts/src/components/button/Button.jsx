import './button.css'
import useStore from '../../apistore';  
import { useNavigate } from 'react-router-dom';

function Button() {
  const navigate = useNavigate();
  const { count, currentEvent } = useStore(state => ({
    count: state.count,
    currentEvent: state.currentEvent
  }));

  const handleButtonClick = () => {
    if (currentEvent) {
      navigate('/order', {
        state: {
          orderCount: count,
          event: currentEvent,
          totalPrice: count * currentEvent.price  
        }
      });
    } else {
      console.log("No event selected");
    }
  };

  return (
    <section className="button-container">
      <button className='button' onClick={handleButtonClick}>Lägg i varukorgen</button>
    </section>
  );
}

export default Button;