import Vue from 'vue'
import App from './App.vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
import 'virtual:windi-utilities.css'
import 'virtual:windi-devtools'
import './main.css'
const pinia = createPinia()

Vue.use(PiniaVuePlugin)

new Vue({
  pinia,
  render: (h) => h(App),
}).$mount('#app')
