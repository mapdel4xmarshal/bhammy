import Vue from 'vue'
import Vuetify from 'vuetify'
import './material.css'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#7f2775',
        secondary: 'rgba(127,39,117,0.35)',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  }
})

export default vuetify
