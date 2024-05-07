import axios from 'axios';
import { create } from 'zustand';

const useStore = create((set) => ({
  events: [],
  currentEvent: null,
  count: 0,
  totalPrice: 0,

  setCurrentEvent: (event) => set({ currentEvent: event }),
  increment: (eventId) => set((state) => {
    const newEvents = state.events.map(event => {
      if(event.id === eventId) {
        return {...event, count: event.count + 1, totalPrice: (event.count + 1) * event.price};
      }
      return event;
    });
    return { events: newEvents };
  }),
  
  decrement: (eventId) => set((state) => {
    const newEvents = state.events.map(event => {
      if(event.id === eventId && event.count > 0) {
        return {...event, count: event.count - 1, totalPrice: (event.count - 1) * event.price};
      }
      return event;
    });
    return { events: newEvents };
  }),

  resetCount: () => set({ count: 0 }), // Lägg till resetCount-funktionen här

  fetchEvents: () => {
    axios.get('https://santosnr6.github.io/Data/events.json')
      .then(response => {
        const eventsWithCounts = response.data.events.map(event => ({
          ...event,
          count: 0,
          totalPrice: 0
        }));
        set({ events: eventsWithCounts });
        console.log('Events fetched and stored with counts and total prices:', eventsWithCounts);
      })
      .catch(error => {
        console.log('Error fetching events:', error);
      });
  },
  getEventByName: (eventName) => {
    const event = useStore.getState().events.find(e => e.name === eventName);
    if (event) {
      set({ currentEvent: event, totalPrice: useStore.getState().count * event.price });
      console.log('Selected event:', event);
    } else {
      console.log('No event found with the name:', eventName);
      set({ currentEvent: null, totalPrice: 0 }); 
    }
  }
}));

export default useStore;
