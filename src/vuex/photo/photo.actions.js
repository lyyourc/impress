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

  fetch(`/api/photo/${photoIds}`, {
    method: 'DELETE',
    mode: 'cors',
    credentials: 'include',
  })
    .then(res => res.json())
    .then(({ success }) => {
      if (!success) return
      dispatch('DELETE_PHOTOS', photoIds)
    })
    .catch(err => console.error('cannt delete photo', err))
}

export const editPhotoAction = (
  { dispatch },
  { modalType, modalProps }
) => {
  dispatch('SHOW_MODAL', { modalType, modalProps })
}

export const savePhotoAction = (
  { dispatch },
  photo
) => {
  const { id, name, description } = photo

  fetch(`/api/photo/${id}`, {
    method: 'PUT',
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify({ name, description }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(json => {
      if (json.success) dispatch('SAVE_PHOTO', photo)
    })
    .catch(err => console.error('cant update photo', err))
}
