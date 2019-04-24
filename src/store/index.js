import Vue from 'vue'
import Vuex from 'vuex'
import win from './modules/win'
import user from './modules/user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    win,
    user
  }
})

export default store
