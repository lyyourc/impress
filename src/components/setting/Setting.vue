<template>
<div class="app-setting">
  <profile></profile>
  <setting-nav></setting-nav>
  <router-view></router-view>
</div>
</template>

<script>
import Profile from './Profile.vue'
import SettingNav from './SettingNav.vue'

export default {
  components: {
    Profile,
    SettingNav,
  },
}
</script>

<style scoped>
.app-setting {
  flex: 1;
}
</style>
