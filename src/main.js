import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import Explore from './components/Explore.vue'

// middleware
Vue.use(Router)

const router = new Router()

router.map({
  '/': {
    component: Home,
  },

  '/explore': {
    component: Explore,
  },
})

// Any invalid route will redirect to home
router.redirect({
  '*': '/',
})

router.start(App, '#app')
