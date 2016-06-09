import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import Explore from './components/explore/Explore.vue'
import Login from './components/auth/Login.vue'
import Signup from './components/auth/Signup.vue'

import Setting from './components/setting/Setting.vue'
import Photo from './components/setting/photo/Photo.vue'
import Album from './components/setting/album/Album.vue'
import Favourite from './components/setting/favourite/Favourite.vue'

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

  '/login': { component: Login },
  '/signup': { component: Signup },

  '/setting': {
    component: Setting,
    subRoutes: {
      '/photo': { component: Photo },
      '/album': { component: Album },
      '/favourite': { component: Favourite },
    },
  },
})

// Any invalid route will redirect to home
router.redirect({
  '*': '/',
})

router.start(App, '#app')

export default router
