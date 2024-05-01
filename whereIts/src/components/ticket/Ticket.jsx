import './ticket.css'

function Ticket() {
  return (
    <section className="ticket-wrapper">
      <section className="ticket-container">
        <section className="ticket-what">
          <p className="ticket-what__header">WHAT</p>
          <h2 className="ticket-artist">Lasse-Stefanz</h2>
        </section>
        <section className="ticket-where">
          <p className="ticket-where__header">WHERE</p>
          <p className="ticket-where__place">Kjell Härnqvistsalen</p>
          <p className="ticket-where__adress">Göteborgs universitet. Pedagogen, hus A</p>
        </section>
        <section className="ticket-time">
          <section className="ticket-date">
            <p className="ticket-header">WHEN</p>
            <p className="ticket-when">21 Mar</p>
          </section>
          <section className="ticket-from">
            <p className="ticket-header">FROM</p>
            <p className="ticket-when">19.00</p>
          </section>
          <section className="ticket-to">
            <p className="ticket-header">TO</p>
            <p className="ticket-when">21.00</p>
          </section>
        </section>
        <section className="ticket-info">
          <p className="ticket-header">INFO</p>
          <p className="ticket-info__seat">Section C - seat 233, bring umbrella</p>
        </section>
        <section className="ticket-qrcode">
          <img src="./assets/qrcode.png" className='ticket-qrImg' alt="qr" />
          <p className="ticket-qrText">#A2ED7</p>
        </section>
      </section>
    </section>
  )
}

export default Ticket