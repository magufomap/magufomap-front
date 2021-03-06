// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import moment from 'moment'
import vueMoment from 'vue-moment'
import Meta from 'vue-meta'

import '@/filters'
import App from '@/App'
import router from '@/router'
import store from '@/store'

import { fixMarkerIcons } from './utils/leaflet'

require('moment/locale/es')

fixMarkerIcons()

Vue.use(vueMoment, { moment })
Vue.config.productionTip = false
Vue.use(Meta)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
