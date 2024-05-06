import axios from 'axios';
import { create } from 'zustand';

const useStore = create((set) => ({
    events: [],
    currentEvent: null,
    count: 0,
    totalPrice: 0,

    setCurrentEvent: (event) => set({ currentEvent: event }),
    increment: () => set((state) => ({ count: state.count + 1, totalPrice: (state.count + 1) * (state.currentEvent ? state.currentEvent.price : 0) })),
    decrement: () => set((state) => ({ count: state.count > 0 ? state.count - 1 : 0, totalPrice: (state.count > 0 ? state.count - 1 : 0) * (state.currentEvent ? state.currentEvent.price : 0) })),
    fetchEvents: () => {
        axios.get('https://santosnr6.github.io/Data/events.json')
            .then(response => {
                set({ events: response.data.events });
                console.log('Events fetched and stored:', response.data.events); 
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
