<template>
<div class="modal">
  <edit-photo-modal
    v-if="modal.modalType === 'EDIT_PHOTO'"
    :photo="modal.modalProps.photo"
    :save-photo-action="modal.modalProps.savePhotoAction"
  >
  </edit-photo-modal>
</div>
</template>

<script>
import { getModal } from '../../vuex/getters'
import EditPhotoModal from './EditPhotoModal.vue'

export default {
  components: {
    EditPhotoModal,
  },
  vuex: {
    getters: {
      modal: getModal,
    },
  },
}
</script>