import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const options = {
    confirmButtonColor: '#088974',
    cancelButtonColor: '#ff7674',
  };
  

createApp(App).use(store).use(router).use(VueSweetalert2, options).mount('#app')
