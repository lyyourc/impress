export function doLogin ({
  dispatch,
}, user) {
  const params = JSON.stringify({
    username: user.username,
    password: user.password,
  })

  fetch('//localhost:3000/api/login', {
    method: 'POST',
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
