<template>
<div>
    <div class="scomon">
        <ul class="scomonLists">
            <li class="SList">
               <span class="stitle">{{drink.title}}</span>
               <ul>
                 <li :key="index" v-for="(for2,index) in drink.list">
                    <router-link to="/detail" class="img" :style= "{background:'url(http://topyun.qicp.vip/'+for2.imgurl+') center/contain no-repeat' }"></router-link>
                    <span>{{for2.name}}</span>
                </li>
               </ul>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drink: '',
      list: [
        {
          name: '咖啡融合冰激凌',
          list1: [
            { url: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg', title: '美式咖啡' },
            { url: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg', title: '美式咖啡' },
            { url: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg', title: '美式咖啡' },
            { url: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg', title: '美式咖啡' }
          ]
        }, {
          name: '星巴克冷萃咖啡系列',
          list1: [
            { url: 'https://www.starbucks.com.cn/images/products/cold-brew.jpg', title: '美式咖啡' },
            { url: 'https://www.starbucks.com.cn/images/products/cold-foam-cold-brew.jpg', title: '美式咖啡' },
            { url: 'https://www.starbucks.com.cn/images/products/vanilla-flavor-sweet-cream-cold-brew.jpg', title: '美式咖啡' }
          ]
        }, {
          name: '烘焙',
          list1: [
            { url: 'https://www.starbucks.com.cn/images/products/american-style-pancakes.jpg', title: '美式烘焙' },
            { url: 'https://www.starbucks.com.cn/images/products/blueberry-muffin.jpg', title: '蓝莓麦芬' },
            { url: 'https://www.starbucks.com.cn/images/products/hazelnut-croissant.jpg', title: '层层榛子果仁酥' }
          ]
        }
      ]
    }
  },
  mounted () {
    const a = this.$store.state.data
    console.log(a)
    this.drink = a
  }
}
</script>

<style lang="less" scoped>
@import '~css/public.less';
.scomon{
    width: 100%;
    background: #f7f7f7;
    overflow: hidden;
    .scomonLists{
      .size(1000px,auto);
      margin: 0 auto;
      padding-top: 60px;
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
          margin-bottom: 10px;
          padding: 0 46px;
        }
      ul{
        width: 100%;
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
