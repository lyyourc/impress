<template>
<div class="modal">
  <edit-photo-modal
    v-if="modal.modalType === 'EDIT_PHOTO'"
    :photo="modal.modalProps.photo"
    :save-photo-action="modal.modalProps.savePhotoAction"
  >
  </edit-photo-modal>

  <signup-modal v-if="modal.modalType === 'SIGNUP_PROMPT'"></signup-modal>
</div>
</template>

<script>
import { getModal } from '../../vuex/getters'
import EditPhotoModal from './EditPhotoModal.vue'
import SignupModal from './SignupModal.vue'

export default {
  components: {
    EditPhotoModal,
    SignupModal,
  },
  vuex: {
    getters: {
      modal: getModal,
    },
  },
}
</script>