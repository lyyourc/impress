<template>
  <main>
    <app-nav></app-nav>
    <router-view></router-view>
  </main>
</template>

<script>
import AppNav from './components/AppNav.vue'

export default {
  components: {
    AppNav,
  },
}
</script>

<style>
body {
  margin: 0;
}

ul {
  list-style: none;
  margin: 0;
}

a {
  text-decoration: none;
}

:root {
  font-size: 62.5%;
}
</style>
