import Vue from 'vue'
import Vuex from 'vuex'
import router from '../main'

Vue.use(Vuex)

const state = {
  isLogged: false,
}

const mutations = {
  LOGIN (state, action) {
    state.isLogged = action
    router.go('/')
  },
}

export default new Vuex.Store({
  state,
  mutations,
})
