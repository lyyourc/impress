export const getExplorePhotosAction = (
  { dispatch }
) => {
  fetch('/api/explore', {
    method: 'get',
    mode: 'cors',
    credentials: 'include',
  })
    .then(res => res.json())
    .then(({ success, data }) => {
      if (success) {
        dispatch('GET_EXPLORE_PHOTOS', data)
      }
    })
}

export const likePhotoAction = (
  { dispatch },
  isAuthed,
  photoId,
  liked
) => {
  if (!isAuthed) {
    dispatch('SHOW_MODAL', { modalType: 'SIGNUP_PROMPT' })
    return
  }

  fetch(`/api/explore/like/${photoId}`, {
    method: liked ? 'delete' : 'post',
    mode: 'cors',
    credentials: 'include',
  })
    .then(res => res.json())
    .then(({ success }) => {
      if (success) {
        dispatch(liked ? 'DISLIKE_PHOTO' : 'LIKE_PHOTO', photoId)
      }
    })
}
