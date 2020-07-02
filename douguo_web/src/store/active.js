const activeajaxs = require('../axios/getdatas/active.js')
// 饮食新闻文章
var state = {
  activeAll: [],
  activeContent: [],
  newslist: [
          {
            url: 'https://cp1.douguo.com/upload/post/1458900546.jpg',
            title: '生活小窍门',
            descript: '分享生活智慧的结晶'
          },{
            url: 'https://cp1.douguo.com/upload/post/1357368720.png',
            title: '走哪吃哪',
            descript: '搜罗世界各地美食，领略全球饮食文化，绘制你的专属美食地图。'
          },{
            url: 'https://cp1.douguo.com/upload/post/1357362275.png',
            title: '食材密码',
            descript: '介绍与食材相关的知识，显微镜下的食材DNA，让我们吃的清楚明白。'
          },{
            url: 'https://cp1.douguo.com/upload/post/1357362330.png',
            title: '食界大咖秀',
            descript: '解读美食达人的修炼秘籍，让我们认识和了解食界大咖是怎样炼成的。'
          },{
            url: 'https://cp1.douguo.com/upload/post/1357362304.png',
            title: '小白厨艺班',
            descript: '美食厨艺培训班，深入浅出传授厨艺，从零开始学做菜，让菜鸟展翅高飞。'
          },{
            url: 'https://cp1.douguo.com/upload/post/1364977560.png',
            title: '食•记',
            descript: '记录和吃有关的事情，记录生活点滴，讲述美食情缘，生活因美食而美丽。'
          }
        ]
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
