import Vue from 'vue'
import router from './router/index.js'
import store from './stores/index.js'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Webpack CSS import
//import 'onsenui/css/onsenui.css';
//import 'onsenui/css/onsen-css-components.css';

// JS import
//import VueOnsen from 'vue-onsenui'; // This already imports 'onsenui'

//Vue.use(VueOnsen);

Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  data: {
    headerTitle: 'Ecolino',
    endpointLogin: 'https://ecolino.ru/api/auth',
    endpointOrder: 'https://ecolino.ru/api/orders',
    endpointAction: 'https://ecolino.ru/api/order',
    userId: 0
  },
  axios,
  router,
  store,
  template: '<App/>',
  components: {App}
})
