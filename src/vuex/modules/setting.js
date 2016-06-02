const state = {
  selectedSettingNavItem: '',
}

const mutations = {
  SELECT_SETTING_NAV_ITEM (state, item) {
    state.selectedSettingNavItem = item
  },
}

export default {
  state,
  mutations,
}
