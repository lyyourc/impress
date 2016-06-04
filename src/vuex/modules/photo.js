const state = {
  photos: [],
}

const mutations = {
  GET_PHOTOS (state, photos) {
    state.photos = photos
  },

  ADD_PHOTO (state, photo) {
    state.photos = [
      ...state.photos,
      photo,
    ]
  },
}

export default {
  state,
  mutations,
}
