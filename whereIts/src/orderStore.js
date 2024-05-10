import { create } from 'zustand';

const useOrderStore = create((set) => ({
  orderedEvents: [],
  tickets: [], // Nytt state för att lagra biljetterna
  showOrderOverview: true, 

  // Lägg till en ny metod för att lägga till biljetter
  addTickets: (newTickets) => {
    set((state) => ({
      tickets: [...state.tickets, ...newTickets],
    }));
  },

  setShowOrderOverview: (value) => {
    set({ showOrderOverview: value });
  },

  updateEventCount: (eventId, newCount) => {
    set((state) => {
      if (newCount === 0) {
        // Ta bort evenemanget om count blir noll
        return {
          orderedEvents: state.orderedEvents.filter((event) => event.id !== eventId),
        };
      } else {
        // Uppdatera count för evenemanget
        return {
          orderedEvents: state.orderedEvents.map((event) =>
            event.id === eventId
              ? { ...event, count: newCount, totalPrice: newCount * event.price }
              : event
          ),
        };
      }
    });
  },

  getSeats: (eventId) => {
    const orderedEvents = useOrderStore.getState().orderedEvents;
    const event = orderedEvents.find((event) => event.id === eventId);
    const index = orderedEvents.findIndex((e) => e.id === eventId);
    if (event) {
      const section = String.fromCharCode(65 + index);
      const seats = [];
      const maxSeats = 500;
      const startNumber = Math.floor(Math.random() * (maxSeats - event.count + 1)) + 1; // Slumpar en startpunkt

      for (let i = 0; i < event.count; i++) {
        seats.push({ section, number: startNumber + i }); // Fyller i platserna 
      }
      return seats;
    }
    return [];
  },

  clearOrder: () => {
    set({ orderedEvents: [] }); // Rensa alla beställda evenemang
  },


}));

export default useOrderStore;