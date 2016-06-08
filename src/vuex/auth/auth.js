import router from '../../main'

const state = {
  isAuthed: false,
  currentUser: null,
}

const mutations = {
  LOGIN (state, user) {
    state.currentUser = user
    state.isAuthed = true

    router.go('/setting')
  },

  LOGOUT (state) {
    state.isAuthed = false

    router.go('/')
  },

  SIGNUP (state, user) {
    state.currentUser = user
    state.isAuthed = true

    router.go('/setting')
  },
}

export default {
  state,
  mutations,
}
