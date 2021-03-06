const quer = require('../indexh')
const md5 = require('../../assets/js/md5')

// 用于获取饮食相关文章数据请求获取

function activeajaxs(id){
  var uid = id
  var timegtime = new Date().getTime()
  var publicwords = md5((timegtime + 1000) * 2)
  return new Promise((resolve, reject) => {
    quer({
      url: 'http://topyun.qicp.vip/getarticle',
      type: 'get',
      data: {
        uid: uid,
        publicwords,
        timegtime
      }
    }).then(dt => {
      resolve(dt.data.list)
    }).catch(rt => {
      reject(rt)
    })
  })
}

module.exports = activeajaxs

