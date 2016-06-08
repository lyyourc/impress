export const logoutAction = (
  { dispatch }
) => {
  dispatch('LOGOUT')
}

export function loginAction ({
  dispatch,
}, user) {
  const params = JSON.stringify(user)

  fetch('/api/auth/login', {
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
