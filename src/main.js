// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App'

Vue.use(VueResource);
Vue.config.productionTip = false

// Share data between components
export const sharedParams = new Vue({
  data: {
    selectedPageIndex: 0,
    currentPage: 'app-home',
    currentPageName: 'Dashboard',
    sidebarVisible : true
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
