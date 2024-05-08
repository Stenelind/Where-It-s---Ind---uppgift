import { create } from 'zustand';

const useOrderStore = create((set) => ({
  orderedEvents: [],

  addEventToOrder: (event) => {
    set((state) => ({
      orderedEvents: [...state.orderedEvents, { ...event, count: 1, totalPrice: event.price }],
    }));
  },

  updateEventCount: (eventId, newCount) => {
    set((state) => ({
      orderedEvents: state.orderedEvents.map((event) =>
        event.id === eventId
          ? { ...event, count: newCount, totalPrice: newCount * event.price }
          : event
      ),
    }));
  },

  getSeats: (eventId) => {
    const orderedEvents = useOrderStore.getState().orderedEvents;
    const event = orderedEvents.find((event) => event.id === eventId);
    const index = orderedEvents.findIndex((e) => e.id === eventId);
    if (event) {
      const section = String.fromCharCode(65 + index); 
      const seats = [];
      for (let i = 0; i < event.count; i++) {
        seats.push({ section, number: 200 + i }); 
      }
      return seats;
    }
    return [];
  },
}));

export default useOrderStore;
