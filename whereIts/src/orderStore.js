import { create } from 'zustand';

const useOrderStore = create((set) => ({
  orderedEvents: JSON.parse(localStorage.getItem('orderedEvents')) || [],

  addEventToOrder: (event) => {
    const updatedEvents = [...useOrderStore.getState().orderedEvents, { ...event, count: 1, totalPrice: event.price }];
    localStorage.setItem('orderedEvents', JSON.stringify(updatedEvents));
    set({ orderedEvents: updatedEvents });
  },

  removeEventFromOrder: (eventId) => {
    const updatedEvents = useOrderStore
      .getState()
      .orderedEvents.filter((event) => event.id !== eventId);
    localStorage.setItem('orderedEvents', JSON.stringify(updatedEvents));
    set({ orderedEvents: updatedEvents });
  },

  updateEventCount: (eventId, newCount) => {
    const updatedEvents = useOrderStore
      .getState()
      .orderedEvents.map((event) =>
        event.id === eventId
          ? { ...event, count: newCount, totalPrice: newCount * event.price }
          : event
      );
    localStorage.setItem('orderedEvents', JSON.stringify(updatedEvents));
    set({ orderedEvents: updatedEvents });
  },

  clearOrder: () => {
    localStorage.removeItem('orderedEvents');
    set({ orderedEvents: [] });
  },
}));

export default useOrderStore;
