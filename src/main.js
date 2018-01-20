import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import fakeapi from './fakeapi.vue'
import marvelapi from './marvelapi.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/fakeapi', component: fakeapi},
  {path: '/marvelapi', component: marvelapi},
]

const router = new VueRouter({
  routes,
})

Vue.component('fakeapi', fakeapi)
Vue.component('marvelapi', marvelapi)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
