import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Router from 'vue-router'
import General from './components/General'
import Work from './components/Work'


const routes = [
  {path: '/', component: General},
  {path: '/work', component: Work}
];

const router = new Router({
  mode: 'history',
  routes // short for `routes: routes`
});

Vue.use(Router);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
