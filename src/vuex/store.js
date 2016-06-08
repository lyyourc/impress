import Vue from 'vue'
import Vuex from 'vuex'

import auth from './auth/auth'
import photo from './photo/photo'
import modal from './modal/modal'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    photo,
    modal,
  },
})
