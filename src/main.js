import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronDown, faChevronUp, faSadCry } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/main.scss';

library.add(faChevronDown, faChevronUp, faSadCry);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
