import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FontAwesomeIcon from "./fontawesome-icons.js";
import './assets/main.css'



const app = createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(router)
    .mount('#app');

