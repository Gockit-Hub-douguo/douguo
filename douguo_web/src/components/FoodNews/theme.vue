<template>
  <!-- 主题站 -->
  <div>
    <div class="navbers">
      <router-link to='/FoodNews' :class="{active: 0}" >全部文章</router-link>
      <router-link to='/Foodartheme' :class="{active: 1}">全部主题站</router-link>
    </div>
    <div class="clearc">
      <div class="conter-left fl">
        <ul>
          <li v-for="(it,index) in list" :key="index" class="fl" :class="{mr: index % 2 == 0}">
            <router-link :to='{path: "/FoodNews", query:{id:it.title}}'>
              <div class="topbody">
                <img :src="it.url" alt="" class="fl">
                <div class="conterx">
                  <h4>{{it.title}}</h4>
                  <p>{{it.descript}}</p>
                </div>
              </div>
              <div class="pageNum">
                45篇文章
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <!-- 广告位 -->
      <div class="conter-right">
        <adsense v-for="it in 2" :key="it"></adsense>
      </div>
    </div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>豆果美食</el-breadcrumb-item>
      <el-breadcrumb-item>主题站</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="less" scoped>
  .clearc{
    overflow: hidden;
  }
  .conter-left{
    width: 690px;
    li{
      width: 315px;
      box-shadow: 0px 2px 5px #ccc;
      overflow: hidden;
      margin-bottom: 40px;
      &.mr{margin-right: 40px;}
      .topbody{
        width: 100%;
        height: 90px;
        padding: 10px;
      }
      img{
        width: 70px;
        height: 70px;
        margin-right: 10px;
      }
      div{
        h4{
          font-size: 14px;
          font-weight: 400;
          color: #333;
        }
        p{
          font-size: 12px;
          color: #999;
          margin-top: 8px;
        }
        font-weight: normal;
      }
      .pageNum{
        border-top: 1px solid #f6f6f6;
        height: 40px;
        width: 100%;
        text-align: right;
        line-height: 40px;
        padding-right: 20px;
        color: #333;
      }
    }
  }
  .conter-right{
    float: right;
    width: 300px;
  }
  div.navbers{
    height: 40px;
    overflow: hidden;
    a{
      display: block;
      float: left;
      width: 77px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      font-size: 14px;
      margin-right: 30px;
      &.active{
        border-bottom: 2px solid #000;
        color: #000000;
        font-weight: 600;
      }
    }
  }
</style>

<script>
import adsense from './slidergg'
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.list = this.$store.state.active.newslist
  },
  components: {
    adsense
  }
}
</script>
