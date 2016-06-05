const state = {
  photos: [],
  seletedPhotos: [],
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

  SELECT_PHOTO (state, photo) {
    const isExisted = state.seletedPhotos.filter(p => p.id === photo.id)

    if (isExisted && isExisted.length === 0) {
      state.seletedPhotos = [
        ...state.seletedPhotos,
        photo,
      ]
    }
  },

  UNSELECT_PHOTO (state, photoId) {
    state.seletedPhotos = state.seletedPhotos.filter(p => p.id !== photoId)
  },

  UNSELECT_ALL_PHOTO (state) {
    state.seletedPhotos = []
  },

  DELETE_PHOTOS (state, photoIds) {
    state.photos = photoIds.reduce((prev, currentId) =>
      prev.filter(p => p.id !== currentId)
    , state.photos)

    state.seletedPhotos = []
  },

  SAVE_PHOTO (state, photo) {
    const photoIndex = state.photos.findIndex(p => p.id === photo.id)

    state.photos = [
      ...state.photos.slice(0, photoIndex),
      photo,
      ...state.photos.slice(photoIndex + 1),
    ]

    console.log(state.photos)
  },
}

export default {
  state,
  mutations,
}
