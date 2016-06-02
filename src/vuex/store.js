import Vue from 'vue'
import Vuex from 'vuex'
import router from '../main'

Vue.use(Vuex)

const state = {
  currentUser: '',
}

const mutations = {
  LOGIN (state, username) {
    state.currentUser = username
    router.go('/')
  },
}

export default new Vuex.Store({
  state,
  mutations,
})
