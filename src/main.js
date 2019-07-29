// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import {routes} from './router/index'
import VueRouter from 'vue-router'
import App from './App'
import FontAwesomeIcon from './vendors/fontawesome'
import vuetify from './vendors/vuetify'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.component('vue-ctk-date-time-picker', VueCtkDateTimePicker)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const router = new VueRouter({
  routes,
  mode: 'history'
})

// Share data between components
export const sharedParams = new Vue({
  data: {
    selectedPageIndex: 0,
    currentPage: 'app-home',
    currentPageName: 'Dashboard',
    sidebarVisible: true
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify,
  router,
  render: h => h(App)
})
