import './plugins/fortawesome';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';

import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('fa-icon', FontAwesomeIcon);

app.mount('#app');
