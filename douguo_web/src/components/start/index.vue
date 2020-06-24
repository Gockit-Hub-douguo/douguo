<template>
  <div class="start">
      <ul class="scomonLists">
            <li class="SList" :key="j" v-for="(item,j) in list">
               <span class="stitle">{{item.name}}</span>
               <ul>
                 <li :key="index" v-for="(for2,index) in item.list1">
                    <router-link  :to="{ path: '/detail', query:{ id:for2.Shoppingkey } } " class="img" :style= "{background:'url('+for2.url+') center/contain no-repeat' }"></router-link>
                    <span>{{for2.title}}</span>
                </li>
               </ul>
            </li>
        </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
       list: [
        {
          name: '星巴克玩味冰调™',
          list1: [
            { url: 'http://topyun.qicp.vip/gP_2020620173631.jpg', title: '橙柚派对' },
            { url: 'http://topyun.qicp.vip/Uq_202062017357.jpg', title: '气炫冰山美式' }
          ]
        }, {
          name: '手工调制浓缩咖啡',
          list1: [
            { url: 'http://topyun.qicp.vip/zR_2020620175053.jpg', title: '摩卡' },
            { url: 'http://topyun.qicp.vip/PT_2020620175234.jpg', title: '榛果风味拿铁' },
            { url: 'http://topyun.qicp.vip/uf_202062017545.jpg', title: '焦糖玛奇朵' },
            { url: 'http://topyun.qicp.vip/Le_2020620174716.jpg', title: '拿铁（热/冷）' },
            { url: 'http://topyun.qicp.vip/gS_2020620174631.jpg', title: '美式咖啡（热/冷）' },
            { url: 'http://topyun.qicp.vip/mJ_2020620175152.jpg', title: '浓缩咖啡' }
          ]
        }, {
          name: '星冰乐®',
          list1: [
            { url: 'http://topyun.qicp.vip/Dr_2020620175458.jpg', title: '焦糖浓缩咖啡星冰乐' },
            { url: 'http://topyun.qicp.vip/Lf_2020620175749.jpg', title: '摩卡星冰乐' },
            { url: 'http://topyun.qicp.vip/HL_2020620175659.jpg', title: '摩卡可可碎片星冰乐' },
            { url: 'http://topyun.qicp.vip/VP_2020620175538.jpg', title: '抹茶星冰乐' },
            { url: 'http://topyun.qicp.vip/Cm_2020620175621.jpg', title: '香草风味星冰乐' }
          ]
        },
        {
          name: '茶瓦纳™',
          list1: [
            { url: 'http://topyun.qicp.vip/zY_202062017590.jpg', title: '红茶拿铁（热/冷）' },
            { url: 'http://topyun.qicp.vip/fK_2020620175944.jpg', title: '抹茶拿铁' },
            { url: 'http://topyun.qicp.vip/JZ_20206201815.jpg', title: '冰摇芒果花草茶' }
          ]
        }, {
          name: '烘焙',
          list1: [
            { url: 'http://topyun.qicp.vip/nN_2020620173827.jpg', title: '蓝莓麦芬' },
            { url: 'http://topyun.qicp.vip/Zk_202062018334.jpg', title: '香浓巧克力可颂' },
            { url: 'http://topyun.qicp.vip/Lv_202062391027.jpg', title: '燕麦焦糖布丁面包' },
            { url: 'http://topyun.qicp.vip/pY_202062018226.jpg', title: '红豆燕麦松饼' },
            { url: 'http://topyun.qicp.vip/Py_202062391437.jpg', title: '全麦核桃麦芬' },
            { url: 'http://topyun.qicp.vip/ZQ_2020623993.jpg', title: '旋风玉桂酥' },
            { url: 'http://topyun.qicp.vip/jv_202062391336.jpg', title: '核桃提子软法面包' },
            { url: 'http://topyun.qicp.vip/fC_202062018454.jpg', title: '香浓巧克力麦芬' },
            { url: 'http://topyun.qicp.vip/eq_202062385411.jpg', title: '美式松饼' },
            { url: 'http://topyun.qicp.vip/QW_202062391122.jpg', title: '提子干松饼' }
          ]
        }, {
          name: '星冰乐®',
          list1: [
            { url: 'http://topyun.qicp.vip/Dr_2020620175458.jpg', title: '焦糖浓缩咖啡星冰乐' },
            { url: 'http://topyun.qicp.vip/Lf_2020620175749.jpg', title: '摩卡星冰乐' },
            { url: 'http://topyun.qicp.vip/HL_2020620175659.jpg', title: '摩卡可可碎片星冰乐' },
            { url: 'http://topyun.qicp.vip/VP_2020620175538.jpg', title: '抹茶星冰乐' },
            { url: 'http://topyun.qicp.vip/Cm_2020620175621.jpg', title: '香草风味星冰乐' }
          ]
        }
      ]
    }
  }
}
</script>>

<style lang="less" scoped>
@import '~css/public.less';
body{
  background: #f7f7f7;
}
.start {
  width: 1000px;
  margin: 0 auto;
  padding-top: 80px;
  .scomonLists{
      .size(1000px,auto);
      margin: 0 auto;
      overflow: hidden;
      .SList{
        border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        overflow: hidden;
        margin-bottom: 30px;
       &>span{
          color: rgba(0, 0, 0, 0.87);
          font-size: 16px;
          margin-top: 10px;
          display: inline-block;
          font-weight: bold;
          margin-bottom: 35px;
          padding: 0 46px;
        }
      ul{
        width: 100%;
        overflow: hidden;
        li{
          width: 232px;
          height: 221px;
          padding: 16px;
          text-align: center;
          float: left;
          margin-right: 10px;
          &:hover{
            color: inherit;
            transform: translate3d(0, -4px, 0);
            transition: .5s;
          }
          &:hover .img{
            box-shadow: 0 1px 3px 2px rgba(0, 0, 0,0.12);
          }
          .img{
              width: 150px;
              height: 150px;
              border-radius: 100%;
              margin: 0 auto;
              box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
              display: block;
             margin-bottom: 8px;
            }
          }
          span{
              font-size: 15px;
              margin-top: 10px;
              display: inline-block;
              font-weight: bold;
          }
        }
      }
  }
}
</style>