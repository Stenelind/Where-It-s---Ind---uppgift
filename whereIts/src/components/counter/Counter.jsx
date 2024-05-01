import './counter.css'

function Counter() {
    return (
        <section className="counter-wrapper">
            <section className="counter-container">
                <p className="counter-price">1050 sek</p>
                <section className="counter-count">
                    <img src="./assets/minus.png" alt="Img minus" className="counter-minus" />
                    <p className="counter-number">3</p>
                    <img src="./assets/plus.png" alt="Img plus" className="counter-plus" />
                </section>
            </section>
        </section>
    )
}

export default Counter