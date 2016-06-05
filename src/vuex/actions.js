export function doLogin ({
  dispatch,
}, user) {
  const params = JSON.stringify({
    username: user.username,
    password: user.password,
  })

  fetch('/api/login', {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    body: params,
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(({ success, data }) => {
      if (success) {
        dispatch('LOGIN', data)
      }
    })
}

export function fetchPhotos ({
  dispatch,
}) {
  fetch('/api/photo', {
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(({ success, data }) => {
      if (!success) return
      dispatch('GET_PHOTOS', data)
    })
}

export function addPhotoAction ({
  dispatch,
}, photo) {
  const formData = new FormData()
  formData.append('photo', photo)

  fetch('/api/photo', {
    method: 'POST',
    mode: 'cors',
    body: formData,
    credentials: 'include',
  })
    .then(res => res.json())
    .then(json => {
      dispatch('ADD_PHOTO', json.data)
    })
}

export function selectPhotoAction ({
  dispatch,
}, photo) {
  dispatch('SELECT_PHOTO', photo)
}

export function unSelectPhotoAction ({
  dispatch,
}, photoId) {
  dispatch('UNSELECT_PHOTO', photoId)
}

export function unSelectAllPhotoAction ({
  dispatch,
}) {
  dispatch('UNSELECT_ALL_PHOTO')
}

export const deletePhotosAction = ({
  dispatch,
}, photos) => {
  const photoIds = photos.map(p => p.id)

  fetch('/api/photo', {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify({ photoIds }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(({ success }) => {
      if (!success) return
      dispatch('DELETE_PHOTOS', photoIds)
    })
}

export const editPhotoAction = (
  { dispatch },
  { modalType, modalProps }
) => {
  dispatch('SHOW_MODAL', { modalType, modalProps })
}

export const closeModalAction = (
  { dispatch }
) => {
  dispatch('HIDE_MODAL')
}

export const savePhotoAction = (
  { dispatch },
  photo
) => {
  fetch('/api/photo', {
    method: 'PUT',
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify({ photo }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(json => {
      if (json.success) dispatch('SAVE_PHOTO', photo)
    })
}
