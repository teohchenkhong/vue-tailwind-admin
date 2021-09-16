//------------------ IMPORTS -------------------//
// VUE
import Vue from 'vue';
import App from './App.vue';

// ROUTE
import router from './router';

// STATE
import store from './store';

// WEB APP
import './registerServiceWorker';

// CSS
import './assets/css/tailwind.css';


//------------------- CONFIG -------------------//
Vue.config.productionTip = false;


//-------------------- RUN ---------------------//
// VUE
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');