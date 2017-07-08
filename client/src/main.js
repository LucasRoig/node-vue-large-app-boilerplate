import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import store from './store/store'
import router from './router/router'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuex);



new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
