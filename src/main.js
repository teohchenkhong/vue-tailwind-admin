//-------------------- IMPORTS ---------------------//
// VUE
import Vue from 'vue';
import App from './App.vue';

// WEB APP WORKERS
import './registerServiceWorker';

// ROUTING
import router from './router';

// STATE MANAGEMENT
import store from './store';

// CSS
import './assets/css/tailwind.css';

//---------------------- INIT ----------------------//
Vue.config.productionTip = false;


//---------------------- RUN -----------------------//
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');