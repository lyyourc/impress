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

export const signupAction = (
  { dispatch },
  user
) => {
  fetch('/api/auth/signup', {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify(user),
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
