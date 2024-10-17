import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // If using Vue Router
import store from './store'; // If using Vuex
import VueApexCharts from "vue3-apexcharts";
// Create the Vue app and mount it to the #app div
createApp(App).use(store).use(router).use(VueApexCharts).mount('#app')
