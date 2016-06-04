import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import photo from './modules/photo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    photo,
  },
})
