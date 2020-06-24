const activeajaxs = require('../axios/getdatas/active.js')
// 饮食新闻文章
var state = {
  activeAll: [],
  activeContent: []
}

var mutations = {
  axupload (sta, params){ // 更新数据
    sta.activeAll = params
  }
}

var actions = {
  // 发送请求获取数据
  loadAxiosActiv (sta, params = 1) {
    activeajaxs(params).then(data => {
      sta.commit('axupload', data)
    }).catch(er => {
      console.log(er)
    })
  }
}


export default {
  state,
  mutations,
  actions
}
