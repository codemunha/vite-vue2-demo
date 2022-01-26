import Vue from 'vue'
import App from './App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import 'uno.css'
const pinia = createPinia()

Vue.use(PiniaVuePlugin)

new Vue({
  pinia,
  render: (h) => h(App),
}).$mount('#app')
