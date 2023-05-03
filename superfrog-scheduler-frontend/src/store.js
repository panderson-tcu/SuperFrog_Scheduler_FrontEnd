import { createPinia } from 'pinia';
import axios from 'axios';


const pinia = createPinia();

export const useEventStore = pinia.defineStore('event', {
    state: () => ({
        eventData:{}
    }),
    actions: {
        updateEventData(data) {
            this.eventData = data
        },
    },
    submitEventData() {
        axios
            .post("http://localhost:8080/api/v1/appearances/admin", {
                eventTitle: '',
                eventType: '',
                eventAddress: '',
                onCampus: '',
                specialInstructions: '',
                expenseBen: '',
                outsideOrganization: '',
                eventDescription: '',
                status: 'PENDING'
                
            });
    }


})