import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSocketIO from 'vue-socket.io'

Vue.use(VueAxios, axios)
Vue.use(new VueSocketIO({ connection: 'http://94.191.48.238' }))

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (store.state.userName) {
    if (to.path === '/login') next({ path: '/' })
    else next()
  } else {
    if (to.path === '/login') next()
    else next(`login?redirect=${to.path}`)
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
