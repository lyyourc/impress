<template>
<div class="select-photos">
  <header>
    <div class="header-section">
      <div> {{selectedPhotos.length}} items seleted </div>
    </div>
    <div class="header-section">
      <div @click="unSelectAllPhotoAction" class="close">
        Clear selection
      </div>
    </div>
  </header>
  
  <div class="selected-photos">
    <div
      v-for="photo in selectedPhotos"
      @click="unSelectPhotoAction(photo.id)"
    >
      <img :src="photo.url">
    </div>
  </div>
  
  <footer>
    <div class="footer-section">
      <div @click="editPhotoAction({
        modalType: 'EDIT_PHOTO',
        modalProps: {
          photo: selectedPhotos[0],
          savePhotoAction: savePhotoAction,
        }
      })"
      >
        <icon name="edit"></icon>
        <span> Edit </span>
      </div>
 
      <div>
        <icon name="share"></icon>
        <span> Share </span>
      </div>

      <div>
        <icon name="plus-square-o"></icon>
        <span> Add to Album </span>
      </div>
    
      <div>
        <icon name="download"></icon>
        <span> Download </span>
      </div>
    </div>
    
    <div class="footer-section">
      <div @click="deletePhotosAction(selectedPhotos)" class="delete-btn">
        <icon name="trash"></icon>
        <span> Delete </span>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
import Icon from 'vue-awesome/src/components/Icon.vue'

import { getSelectedPhotos } from '../../../vuex/getters'
import {
  unSelectPhotoAction,
  unSelectAllPhotoAction,
  deletePhotosAction,
  editPhotoAction,
  savePhotoAction,
} from '../../../vuex/photo/photo.actions'

export default {
  vuex: {
    getters: {
      selectedPhotos: getSelectedPhotos,
    },
    actions: {
      unSelectPhotoAction,
      unSelectAllPhotoAction,
      deletePhotosAction,
      editPhotoAction,
      savePhotoAction,
    },
  },

  components: {
    Icon,
  },
}
</script>

<style scoped>
.select-photos {
  display: flex;
  flex-direction: column;
  
  position: absolute;
  bottom: 0;
  
  width: 100%;
  padding: 1rem;
  background: #fff;
}

header,
footer {
  display: flex;
  justify-content: space-between;
}

.header-section,
.footer-section {
  display: flex;
  align-items: center;
}

.header-section > div,
.footer-section > div {
  padding: .5rem 2rem;
  cursor: pointer;

  display: flex;
  align-items: center;
}

.fa-icon {
  margin-right: .5rem;
}

.header-section .close {
  cursor: pointer;
}

.selected-photos {
  display: flex;
  padding: 0 .5rem;
}

.selected-photos > div {
  cursor: pointer;
}

img {
  padding: 0 .5rem;
  width: 5rem;
  height: 5rem;
  object-fit: cover;
}

.delete-btn {
  cursor: pointer;
  color: #f20;
}
</style>