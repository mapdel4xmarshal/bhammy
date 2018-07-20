// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/* import HelloWorld from './components/HelloWorld'

Vue.component('message', HelloWorld) */

Vue.config.productionTip = false

// Share data between components
export const sharedParams = new Vue({
  data: {
    selectedPageIndex: 0
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
