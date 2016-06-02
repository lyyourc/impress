export function doLogin ({
  dispatch,
}, user) {
  const params = JSON.stringify({
    username: user.username,
    password: user.password,
  })

  fetch('/api/login', {
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

export function selectSettingNavItem ({
  dispatch,
}, item) {
  dispatch('SELECT_SETTING_NAV_ITEM', item)
}
