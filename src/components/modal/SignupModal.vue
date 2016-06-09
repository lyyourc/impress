<template>
<div class="modal modal-mask">
  <div class="modal-wrapper">
    <header class="modal-header">
      <h3 class="title"> Tips </h3>
      <span @click="closeModalAction" class="close"> &times; </span>
    </header>

    <div class="modal-body">
      <div class="center-item"></div>
      <div class="center-item"> You found a photo to like </div>
      <div class="center-item">
        Join Impress to add this photo to your favourites
      </div>
    </div>

    <div class="modal-footer">
      <a class="center-item btn" @click="this.goSignup()"> Begin Tour </a>
    </div>
  </div>
</div>
</template>

<script>
import router from '../../main'
import { closeModalAction } from '../../vuex/modal/modal.actions'

export default {
  vuex: {
    actions: {
      closeModalAction,
    },
  },

  methods: {
    goSignup () {
      this.closeModalAction()
      router.go('/signup')
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
  border-radius: 5px;
  
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

.modal-body {
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 1rem;
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

.modal-footer {
  text-align: center;
}

.modal-footer .btn {
  padding: .5rem 1.5rem;
  background: #16A2D7;
  border-radius: .4rem;
  cursor: pointer;
  color: #fff;
}
</style>