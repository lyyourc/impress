<template>
<div class="setting-photo"
  @dragenter="addPhoto"
  @dragover="addPhoto"
  @drop="addPhoto"
>
  <h3 v-if="photos && photos.length === 0" class="msg">
    Drag and Drop to upload photos
  </h3>
  
  <div v-else class="card-group">
    <div class="card"
      v-for="photo in photos"
      @click="selectPhoto(photo)"
    >
      <img :src="photo.url" >
    </div>
  </div>
  
  <select-photo
    v-if="selectedPhotos && selectedPhotos.length !== 0">
  </select-photo>
</div>
</template>

<script>
import {
  getCurrentUser,
  getSelectedPhotos,
} from '../../../vuex/getters'

import {
  fetchPhotos,
  addPhotoAction,
  selectPhotoAction,
 } from '../../../vuex/actions'

import SelectPhoto from './SelectPhoto.vue'

export default {
  components: {
    SelectPhoto,
  },

  vuex: {
    getters: {
      user: getCurrentUser,
      photos: ({ photo }) => photo.photos,
      selectedPhotos: getSelectedPhotos,
    },
    actions: {
      fetchPhotos,
      addPhotoAction,
      selectPhotoAction,
    },
  },
  created () {
    this.fetchPhotos()
  },
  methods: {
    addPhoto (event) {
      event.preventDefault()
      if (event.type.toLowerCase() !== 'drop') return 0

      this.addPhotoAction(event.dataTransfer.files[0])

      return 0
    },
    selectPhoto (photo) {
      this.selectPhotoAction(photo)
    },
  },
}
</script>

<style scoped>
.setting-photo {
  flex: 1;
  position: relative;
  background: #f3f5f6;
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