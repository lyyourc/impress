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
}

export default {
  state,
  mutations,
}

