export function getCurrentUser (state) {
  return state.auth.currentUser
}

export function getPhotos (state) {
  return state.photo.photos
}

export function getSelectedPhotos (state) {
  return state.photo.seletedPhotos
}
