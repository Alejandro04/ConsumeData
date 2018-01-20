import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import fakeapi from './fakeapi.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/fakeapi', component: fakeapi},
]

const router = new VueRouter({
  routes,
})

Vue.component('fakeapi', fakeapi)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
