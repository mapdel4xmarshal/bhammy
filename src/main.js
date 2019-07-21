// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import {routes} from './router/index'
import VueRouter from 'vue-router'
import App from './App'
import { library } from '@fortawesome/fontawesome-svg-core'
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
import { faPlusCircle,
  faChartPie,
  faSlidersH,
  faSearch,
  faDownload,
  faPlus,
  faPrint,
  faSave,
  faTimes,
  faTimesCircle,
  faEdit,
  faAngleDown,
  faAngleUp,
  faAngleLeft,
  faAngleRight,
  faEnvelope,
  faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPlusCircle, faChartPie, faSlidersH, faSearch, faDownload, faPlus, faPrint, faSave, faTimes, faTimesCircle,
  faEdit, faAngleDown, faAngleUp, faEnvelope, faBell, faAngleLeft, faAngleRight
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

Vue.use(VueResource)
Vue.component('vue-ctk-date-time-picker', VueCtkDateTimePicker)

Vue.config.productionTip = false

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
  router,
  render: h => h(App)
})
