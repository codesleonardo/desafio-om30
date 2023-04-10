import { createApp } from 'vue';
import { Vuelidate } from 'vuelidate';
import App from './App.vue';
import router from './router';

import 'bootstrap/dist/css/bootstrap.min.css';

createApp(App).use(router, Vuelidate).mount('#app');
