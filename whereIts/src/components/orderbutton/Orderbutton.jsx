import './orderbutton.css';

function Orderbutton({ onClick }) { 
  return (
    <section className="orderbutton-container">
      <button className='orderbutton' onClick={onClick}>Skicka order</button>
    </section>
  );
}

export default Orderbutton;