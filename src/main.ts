import './assets/main.css';
//import 'bootstrap/dist/js/bootstrap.js';
//import 'bootstrap/dist/css/bootstrap.min.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import { Inkline, components } from '@inkline/inkline';
import './css/variables/index.scss';
import '@inkline/inkline/css/index.scss';
import '@inkline/inkline/css/utilities.scss';
import { InklineIcons } from '@inkline/icons';
import * as fontAwesomeIcons from '@inkline/icons/packs/fontawesome';

InklineIcons.add({
  ...fontAwesomeIcons,
});

const app = createApp(App)

app.use(createPinia());
app.use(router);
app.use(Inkline, { components });
app.use(InklineIcons);


app.mount('#app');
