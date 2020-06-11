import { getTypelist } from '@/assets/public/axiosRequest'
var state = {
  typeList: []
}
var mutations = {
  changeTypeList (state, list) {
    state.typeList = list
  }
}
var actions = {
  actionGetTypeList ({ commit }) {
    getTypelist({
      success: (data) => {
        commit('changeTypeList', data.data.items)
      }
    })
  }
}
var getters = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
