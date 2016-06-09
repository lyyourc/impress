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
