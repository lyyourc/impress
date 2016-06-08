const state = {
  modalType: '',
  modalProps: {},
}

const mutations = {
  SHOW_MODAL (state, { modalType, modalProps }) {
    state.modalType = modalType
    state.modalProps = modalProps
  },

  HIDE_MODAL (state) {
    state.modalType = null
    state.modalProps = {}
  },
}

export default {
  state,
  mutations,
}
