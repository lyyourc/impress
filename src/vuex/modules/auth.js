import router from '../../main'

const state = {
  currentUser: null,
}

const mutations = {
  LOGIN (state, user) {
    state.currentUser = user
    router.go('/setting')
  },
}

export default {
  state,
  mutations,
}

