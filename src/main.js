import Vue from 'vue'
import App from './App.vue'
import router from './js/router'
import BootstrapVue from 'bootstrap-vue'
import VueGapi from 'vue-gapi'
import VueI18n from "vue-i18n"

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { messages } from 'vue-bootstrap-calendar'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

Vue.use(VueI18n)

window.i18n = new VueI18n({
  locale: 'en',
  messages
})

/* eslint-disable no-undef */
new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
