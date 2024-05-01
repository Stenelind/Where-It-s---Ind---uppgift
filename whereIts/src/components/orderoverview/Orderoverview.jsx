import './orderoverview.css'

function Orderoverview() {
  return (
    <section className="orderoverview-wrapper">
    <section className="orderoverview-container">
        <p className="orderoverview-artist">Lasse-Stefanz</p>
        <p className="orderoverview-time">21 mars kl 19.00 - 21.00</p>
        <section className="orderoverview-count">
            <img src="./assets/minus.png" alt="Img minus" className="counter-minus" />
            <p className="orderoverview-number">3</p>
            <img src="./assets/plus.png" alt="Img plus" className="counter-plus" />
        </section>
    </section>

    <section className="orderoverview-container">
        <p className="orderoverview-artist">Lasse-Stefanz</p>
        <p className="orderoverview-time">21 mars kl 19.00 - 21.00</p>
        <section className="orderoverview-count">
            <img src="./assets/minus.png" alt="Img minus" className="counter-minus" />
            <p className="orderoverview-number">3</p>
            <img src="./assets/plus.png" alt="Img plus" className="counter-plus" />
        </section>
    </section>

    <section className="orderoverview-container">
        <p className="orderoverview-artist">Lasse-Stefanz</p>
        <p className="orderoverview-time">21 mars kl 19.00 - 21.00</p>
        <section className="orderoverview-count">
            <img src="./assets/minus.png" alt="Img minus" className="counter-minus" />
            <p className="orderoverview-number">3</p>
            <img src="./assets/plus.png" alt="Img plus" className="counter-plus" />
        </section>
    </section>

</section>
  )
}

export default Orderoverview