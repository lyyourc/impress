<template>
<div class="setting-photo">
  <h3 v-if="photos && photos.length === 0" class="msg">
    Drag and Drop to upload photos
  </h3>
  
  <div v-else class="card-group">
    <div v-for="photo in photos" class="card">
      <img :src="photo.url" >
    <div>
  </div>
</div>
</template>

<script>
import { getCurrentUser } from '../../../vuex/getters'
import { fetchPhotos } from '../../../vuex/actions'

export default {
  vuex: {
    getters: {
      user: getCurrentUser,
      photos: ({ photo }) => photo.photos,
    },
    actions: {
      fetchPhotos,
    },
  },
  created () {
    this.fetchPhotos()
  },
}
</script>

<style scoped>
.setting-photo {
  flex: 1;
  position: relative;
}

.msg {
  color: #56727C;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
  
.card-group {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
}

.card img {
  width: 12.8rem;
  height: 12.8rem;
  margin: 1rem 0 0 1rem;
  object-fit: cover;
}

.card img:hover {
  border: 3px solid #16A2D7;
  cursor: pointer;
  // background: linear-gradient(to bottom, 
  //   rgba(0, 0, 0, .1) 10%, rgba(0, 0, 0, .2) 30%, 
  //   rgba(0, 0, 0, .3) 60%, rgba(0, 0, 0, .5) 100%
  // );
}
</style>