<template>
  <main>
    <app-nav></app-nav>
    <router-view></router-view>
    <root-modal></root-modal>
  </main>
</template>

<script>
import store from './vuex/store'
import AppNav from './components/AppNav.vue'
import RootModal from './components/modal/RootModal.vue'

export default {
  components: {
    AppNav,
    RootModal,
  },
  store,
}
</script>

<style>
* {
  box-sizing: border-box;
}

:root {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  margin: 0;
  line-height: 1.5;
}

ul {
  list-style: none;
  margin: 0;
}

a {
  text-decoration: none;
}

main {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
