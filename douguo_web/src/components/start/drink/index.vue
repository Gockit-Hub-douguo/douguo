<template>
<div>
    <div class="scomon">
        <ul class="scomonLists">
            <li class="SList" :key="index" v-for="(item,index) in list">
               <span class="stitle">{{item.name}}</span>
               <ul>
                 <li :key="index" v-for="(for2,index) in item.list1">
                    <div class="img" :style= "{background:'url('+for2.url+') center/contain no-repeat' }"></div>
                    <span>{{for2.title}}</span>
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
        }
      ]
    }
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
          .img{
              width: 150px;
              height: 150px;
              border-radius: 100%;
              margin: 0 auto;
              box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.12);
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
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
