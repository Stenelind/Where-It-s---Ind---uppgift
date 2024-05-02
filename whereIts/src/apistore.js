import axios from 'axios';
import { create } from 'zustand';

const apistore = create((set) => ({
    events: [],
    currentEvent: null,

    fetchEvents: () => {
        axios.get(`https://santosnr6.github.io/Data/events.json`)
            .then(response => {
                set({ events: response.data.events });
                console.log('Events fetched and stored:', response.data.events); 
            })
            .catch(error => {
                console.log('Error fetching events:', error); 
            });
    },

    getEventByName: (eventName) => {
        const event = apistore.getState().events.find(e => e.name === eventName);
        set({ currentEvent: event });
        console.log('Selected event:', event);
    }
}));

export default apistore;