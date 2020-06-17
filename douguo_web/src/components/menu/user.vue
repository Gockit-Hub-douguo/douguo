<template>
  <div class="boxs">
    <!-- 导航层 -->
    <div class="Firstlevelnavigation">
      <router-link to='/Menu'>菜谱</router-link>
      <router-link to='/mofu'>菜单</router-link>
      <router-link to='#' class="active">用户</router-link>
    </div>
    <!-- 用户信息表 -->
    <div class="userinfo">
      <h3>"热菜的相关用户"</h3>
      <ul>
        <li v-for="item in 20" :key="item" class="fl">
          <div class="userphoto">
            <img src="https://tx1.douguo.com/upload/photo/a/0/4/70_u88036793173233171953.jpeg" alt="">
            <btn></btn>
          </div>
          <div class="follow">
            <i>菜菜君</i>
            <p>普通用户</p>
            <p class="fsinfo"><i>粉丝31076</i><i>菜谱40</i></p>
          </div>
        </li>
      </ul>
    </div>
    <!-- 广告位 -->
    <div class="rightgg">
      <adsense></adsense>
      <adsense></adsense>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .rightgg{
    float: right;
  }
  .boxs{
    padding-top: 10px;
  }
  .follow{
    &>i{
      display: block;
      width: 137px;
      font-size: 15px;
      font-style: normal;
      color: #000;
      padding-top: 10px;
    }
    p{
      margin-top: 15px;
    }
    p.fsinfo i{
      font-size: 13px;
      font-style: normal;
        margin-right: 5px;
    }
  }
  .Firstlevelnavigation{
    overflow: hidden;
  }
  .Firstlevelnavigation a{
    float: left;
    padding:5px 12px;
    line-height: 30px;
    text-align: center;
    font-size: 14px;
    margin-right: 30px;
    &.active{
      color: #000;
      border-bottom: 2px solid #000000;
    }
  }
  .userinfo{
    float: left;
    width: 690px;
    h3{
      font-size: 18px;
      color: #000000;
      margin: 20px 0;
    }
    ul li{
      width: 236px;
      height: 110px;
      overflow: hidden;
      margin-right: 90px;
      margin-bottom: 40px;
      div.userphoto{
        margin-right: 10px;
        float: left;
        overflow: hidden;
        width: 80px;
        height: 108px;
        img{
          width: 64px;
          height: 64px;
          border-radius: 50%;
          margin-left: 8px;
          margin-bottom: 10px;
        }
      }
    }
  }
</style>

<script>
import btn from './button'
import adsense from '@/components/FoodNews/slidergg'
export default {
  components: {
    btn,
    adsense
  }
}
</script>