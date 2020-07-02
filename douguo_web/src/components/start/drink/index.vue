<template>
<div>
    <div class="scomon">
        <ul class="scomonLists">
            <li class="SList">
               <span class="stitle">{{drink.title}}</span>
               <ul>
                 <li :key="index" v-for="(for2,index) in drink.list">
                    <router-link v-if="menu === 'DepathCoffe' || menu === 'Conventional'" :to="{ path: '/kafei', query:{ id:for2.Shoppingkey } } " class="img" :style= "{background:'url(http://topyun.qicp.vip/'+for2.imgurl+') center/contain no-repeat' }"></router-link>
                    <router-link v-else  :to="{ path: '/detail', query:{ id:for2.Shoppingkey } } " class="img" :style= "{background:'url(http://topyun.qicp.vip/'+for2.imgurl+') center/contain no-repeat' }"></router-link>
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
      menu: '',
      drink: ''
    }
  },
   computed: {
    // 监听vuex里面的data数据是否发生变化
    ff () {
      return this.$store.state.data
    }
  },
  // 当ff数据发生变化即立刻执行该方法，更新drink数据
  watch: {
    ff (newValue) {
      this.drink = newValue
    }
  },
  mounted () {
    const a = this.$store.state.data
    this.drink = a
  this.menu = this.$route.query.menu
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
