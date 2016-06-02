<template>
<nav>
  <ul class="app-nav">
    <div class="nav-section">
      <li v-link="{ path: '/' }" class="logo"></li>
      <li v-link="{ path: '/explore' }"> Explore </li>
    </div>
    
    <div class="nav-section">
      <li><input placeholder="Find Photos"></li>
      <li v-link="{ path: '/login' }" v-if="!currentUser"> Log In </li>
      <li v-link="{ path: '/signup' }" v-if="!currentUser" class="active">
        Sign Up
      </li>
      <li v-link="{ path: '/setting' }" v-if="currentUser">
        {{ currentUser }}
      </li>
    </div>
  </ul>
</nav>
</template>

<script>
import { getCurrentUser } from '../vuex/getters'

export default {
  vuex: {
    getters: {
      currentUser: getCurrentUser,
    },
  },
}
</script>

<style scoped>
.app-nav {
  display: flex;
  justify-content: space-between;
  
  padding: 10px;
  background-color: #56727C;
  font-size: 1.6rem;
}

.nav-section {
  display: flex;
  align-items: center;
}
.nav-section:first-child {
  margin-left: 50px;
}
.nav-section:last-child {
  margin-right: 100px;
}

.app-nav li {
  padding: 5px 15px;
  cursor: pointer;
  color: #D9E9EF;
}
.app-nav li.active {
  background-color: #415F69;
  border-radius: 4px;
}

.app-nav .logo {
  background-image: url('../assets/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  
  padding-top: 11.4%;
  margin-right: 4rem;
}

.app-nav input {
  padding: 5px;
  
  border-radius: 3px;
  border-style: none;
  outline-offset: 0;
}
</style>
