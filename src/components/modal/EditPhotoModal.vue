<template>
<div class="modal modal-mask">
  <div class="modal-wrapper">

    <header class="modal-header">
      <h3 class="title"> Editing Photo </h3>
      <span @click="closeModalAction" class="close"> &times; </span>
    </header>
    
    <div class="modal-body">
      <input v-model="photo.name" placeholder="photo name">
      <textarea placeholder="photo description"
         v-model="photo.description" 
      ></textarea>
    </div>
    
    <footer class="modal-footer">
      <a @click="closeModalAction" class="btn btn-cancel"> Cancel </a>
      <a class="btn btn-save" @click="savePhoto"> Save </a>
    </footer>
  </div>
</div>
</template>

<script>
import { closeModalAction } from '../../vuex/modal/modal.actions'

export default {
  props: ['photo', 'savePhotoAction'],
  vuex: {
    actions: {
      closeModalAction,
    },
  },
  methods: {
    savePhoto () {
      this.savePhotoAction(this.photo)
      this.closeModalAction()
    },
  },
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9998;
  
  background: rgba(0, 0, 0, .5);
  border-raidus: 5px;
  
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-wrapper {
  min-width: 30rem;
  min-height: 30rem;
  padding: 2rem 3rem;
  background: #fff;
  
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  justify-content: space-between;
}
.modal-header .title {
  margin: 0;
}
.modal-header .close {
  cursor: pointer;
}


.modal-body {
  flex: 1;
  display: flex;
  flex-direction: column;
  
  margin: 1rem 0;
}
.modal-body > * {
  margin-bottom: 1rem;
}


.modal-footer {
  display: flex;
  justify-content: flex-end;
}

.modal-footer .btn {
  padding: .5rem 1.5rem;
  background: #16A2D7;
  border-radius: .4rem;
  cursor: pointer;
}

.modal-footer .btn-cancel {
  color: #16A2D7;
  background-color: #FFFFFF;
}

.modal-footer .btn-save {
  color: #fff;
}
</style>