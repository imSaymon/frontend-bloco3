import { createApp } from 'vue';
import { createPinia } from 'pinia';
import httpClient from './views/services/http-client';
import App from './App.vue';
import router from './router';
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import storage from '@/views/services/storage';
import './assets/main.css';

httpClient.setInterceptor();
const auth = JSON.parse(storage.get("auth"));

if(auth) {
    httpClient.setAuthToken(auth.token);
}

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App)

app.use(pinia)
app.use(router)

app.mount('#app')
