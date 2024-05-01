import './orderoverview.css'

function Orderoverview() {
  return (
    <section className="orderoverview-wrapper">
    <section className="orderoverview-container">
        <p className="orderoverview-artist">Lasse-Stefanz</p>
        <p className="orderoverview-time">21 mars kl 19.00 - 21.00</p>
        <section className="orderoverview-count">
            <img src="./assets/minus.png" alt="Img minus" className="orderoverview-minus" />
            <p className="orderoverview-number">3</p>
            <img src="./assets/plus.png" alt="Img plus" className="orderoverview-plus" />
        </section>
    </section>

    <section className="orderoverview-container">
        <p className="orderoverview-artist">Pelle trubadur</p>
        <p className="orderoverview-time">29 mars kl 22.00 - 00.00</p>
        <section className="orderoverview-count">
            <img src="./assets/minus.png" alt="Img minus" className="orderoverview-minus" />
            <p className="orderoverview-number">2</p>
            <img src="./assets/plus.png" alt="Img plus" className="orderoverview-plus" />
        </section>
    </section>

    <section className="orderoverview-container">
        <p className="orderoverview-artist">Klubb Untz</p>
        <p className="orderoverview-time">17 april kl 22.00 - 00:00</p>
        <section className="orderoverview-count">
            <img src="./assets/minus.png" alt="Img minus" className="orderoverview-minus" />
            <p className="orderoverview-number">1</p>
            <img src="./assets/plus.png" alt="Img plus" className="orderoverview-plus" />
        </section>
    </section>

</section>
  )
}

export default Orderoverview