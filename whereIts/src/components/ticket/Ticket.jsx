import './ticket.css'

function Ticket() {
  return (
    <section className="ticket-wrapper">
    <section className="ticket-container">
      <section className="ticket-qrcode">
        <img src="./assets/qrcode.png" className='ticket-qrImg' alt="qr" />
        <p className="ticket qrText">#A2ED7</p>
      </section>
    </section>
    </section>
  )
}

export default Ticket