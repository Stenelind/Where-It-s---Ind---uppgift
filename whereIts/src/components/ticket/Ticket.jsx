import React from 'react';
import './ticket.css';

// En global memoization för att spara genererade items baserat på event
const memo = {};

function Ticket({ event, seat }) {

  // Generera ett unikt ID för biljetten
  const generateQrID = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let qrID = '#';
    for (let i = 0; i < 5; i++) {
      qrID += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return qrID;
  };

  const generateRandomItem = (eventId) => {
    // Om eventet redan har ett item, returnera det
    if (memo[eventId]) {
      return memo[eventId];
    }

    const items = ['bring booze', 'bring sunglasses', 'bring umbrella', 'bring earplugs'];
    const randomItem = items[Math.floor(Math.random() * items.length)];

    // Spara det genererade itemet för det aktuella eventet
    memo[eventId] = randomItem;

    return randomItem;
  };

  const qrID = generateQrID();
  const eventId = event.name + '-' + event.where; // Skapar en unik nyckel för varje event
  const randomItem = generateRandomItem(eventId);

  // Funktion för att hämta rätt adress baserat på evenemangsplatsen
  const getEventAddress = (eventName) => {
    switch (eventName) {
      case 'Avicii arena':
        return 'Tystgatan 0, Musiktäppan, Ruhålan 12345';
      case 'Puben på hörnet':
        return 'Vattentorget 0, Torrlagda stan, Törstbyn 11111';
      case 'Mörka hörnet':
        return 'Solskensvägen 1, Ljusdalen, Glitterbyn 00001';
      case 'Götaplatsen':
        return 'Bakgatan 5, Framsidan, Ovansidan 20202';
      case 'Kungliga operan':
        return 'Gustav Adolfs torg 2, 111 52 Stockholm';
      default:
        return 'Okänd adress';
    }
  };

  console.log("Event:", event);

  if (!event) {
    return <div>No event data</div>;
  }

  return (
    <section className="ticket-wrapper">
      <section className="ticket-container">
        <section className="ticket-what">
          <p className="ticket-what__header">WHAT</p>
          <h2 className="ticket-artist">{event.name}</h2>
        </section>
        <section className="ticket-where">
          <p className="ticket-where__header">WHERE</p>
          <p className="ticket-where__place">{event.where}</p>
          <p className="ticket-where__adress">{getEventAddress(event.where)}</p>
        </section>
        <section className="ticket-time">
          <section className="ticket-date">
            <p className="ticket-header">WHEN</p>
            <p className="ticket-when">{event.when.date.split(' ')[0] + ' ' + event.when.date.split(' ')[1].substring(0, 3)}</p>
          </section>
          <section className="ticket-from">
            <p className="ticket-header">FROM</p>
            <p className="ticket-when">{event.when.from}</p>
          </section>
          <section className="ticket-to">
            <p className="ticket-header">TO</p>
            <p className="ticket-when">{event.when.to}</p>
          </section>
        </section>
        <section className="ticket-info">
          <p className="ticket-header">INFO</p>
          <p className="ticket-info__seat">Section {seat.section} - seat {seat.number}, {randomItem}</p>
        </section>
        <section className="ticket-qrcode">
          <img src="./assets/qrcode.png" className='ticket-qrImg' alt="qr" />
          <p className="ticket-qrText">{qrID}</p>
        </section>
      </section>
    </section>
  )
}

export default Ticket;