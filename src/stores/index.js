import Vue from 'vue'
import Vuex from 'vuex'
import orders from './modules/orders.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    orders
  },
  strict: true
})
