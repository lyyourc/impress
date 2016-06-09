import justifiedLayout from 'justified-layout'

const state = {
  geometry: [],
  explorePhotos: [],
}

const mutations = {
  GET_EXPLORE_PHOTOS (state, photos) {
    state.explorePhotos = photos
    state.geometry = justifiedLayout(
      photos.map(p => p.aspectRadio),
      {
        containerPadding: 10,
        targetRowHeight: 200,
      }
    )
  },

  LIKE_PHOTO (state, photoId) {
    const { explorePhotos } = state
    const index = explorePhotos.findIndex(p => p.id === photoId)
    explorePhotos[index].likes += 1
    explorePhotos[index].liked = true

    state.explorePhotos = [
      ...explorePhotos.slice(0, index),
      explorePhotos[index],
      ...explorePhotos.slice(index + 1),
    ]
  },

  DISLIKE_PHOTO (state, photoId) {
    const { explorePhotos } = state
    const index = explorePhotos.findIndex(p => p.id === photoId)
    explorePhotos[index].likes -= 1
    explorePhotos[index].liked = false

    state.explorePhotos = [
      ...explorePhotos.slice(0, index),
      explorePhotos[index],
      ...explorePhotos.slice(index + 1),
    ]
  },
}

export default {
  state,
  mutations,
}

