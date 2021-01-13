import Vue from 'vue'
import App from './App.vue'
import router from './router'

import env from './config/env'

import axios from 'axios'
import API from './config/api'
import Store from './config/store'

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


Vue.config.productionTip = false

axios.defaults.baseURL = env.baseURL;

window.API = API;
window.Store = Store;
window.axios = axios


new Vue({
	render: h => h(App),
	components: { App },
	router
}).$mount('#app')
