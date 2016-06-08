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
        Edit
      </div>
 
      <div> Share </div>
      <div> Add to Album </div>
      <div> Download </div>
    </div>
    
    <div class="footer-section">
      <div @click="deletePhotosAction(selectedPhotos)" class="delete-btn">
        Delete
      </div>
    </div>
  </footer>
</div>
</template>

<script>
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
  padding: .5rem 1rem;
  cursor: pointer;
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