<template>
<div class="profile">
  <img class="cover" :src="user.cover">  
  <div class="gradient"></div>
  
  <div class="info">
    <img class="avatar" :src="user.avatar">
    <div>
      <h2 class="username"> {{ user.username }} </h2>
      <p class="bio"> {{ user.bio }} </p>
    </div>
  </div>
</div>
</template>

<script>
import { getCurrentUser } from '../../vuex/getters'

export default {
  vuex: {
    getters: {
      user: getCurrentUser,
    },
  },
}
</script>

<style>
.profile {
  height: 25rem;
  position: relative;
}

.gradient {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, transparent 0, rgba(0,0,0,0.03) 8%,
    rgba(0,0,0,0.11) 21%, rgba(0,0,0,0.3) 78%,
    rgba(0,0,0,0.4) 95%, rgba(0,0,0,0.5) 100%);
}

.profile .cover {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.info {
  position: absolute;
  bottom: 0;
  left: 0;
  
  width: 100%;
  padding: 2rem 10rem;
  color: #fff;
  
  display: flex;
}

.avatar {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  margin-right: 2rem;
}

.username {
  margin: 0;
  font-size: 3.6rem;
  letter-spacing: .5rem;
  word-spacing: .3rem;
}

.bio {
  margin: 0;
}
</style>
