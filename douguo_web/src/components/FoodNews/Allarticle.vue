<template>
  <!-- 全部文章 -->
  <div class="Bbox">
    <div class="navbers">
      <router-link to='/FoodNews' :class="{active: 1}" >全部文章</router-link>
      <router-link to='/Foodartheme' :class="{active: 0}">全部主题站</router-link>
    </div>
    <div class="conter">
      <!-- 左则区域 -->
      <div class="LeftInfo fl">
        <ul>
          <li v-for="(it, ke) in activeAll" :key="ke">
            <img :src="'http://topyun.qicp.vip/' + it.imgurl" alt="">
            <div>
              <h3>{{it.title}}</h3>
              <p class="author">来自：<a>{{it.source}}</a></p>
              <p class="time">{{it.times | times}}</p>
              <p class="linkurl"><router-link :to="{path: '/foodardetail', query:{id: it.id}}" type="primary" :underline="false">查看全文</router-link></p>
            </div>
          </li>
        </ul>
      </div>
      <div class="Rightinfo">
        <h2>主题站</h2>
        <ul class="info">
          <li :key="i" v-for="(ite,i) in list" >
            <el-link :underline="false" @click="utactive(ite.title)" class="fl"><img :src="ite.url" alt=""></el-link>
            <div class="conterx">
              <h4>{{ite.title}}</h4>
              <p>{{ite.descript}}</p>
            </div>
          </li>
        </ul>
        <!-- 欢迎来稿 -->
        <div class="laigao">
          <h3>欢迎来稿</h3>
          <p>
          豆果美食主题站提供了一个温暖的平台，如果你是个资深吃货，爱好写作，并且乐于分享，那么我们找的就是你啦！
          </p>
          <p>文章一经录用，奖2000积分！投稿要求：原创文章，语言流畅，思路清晰，主题与“美食”相关，文章至少2000字，图片精美。</p>
          <p>投稿邮箱：bj@douguo.com 我们期待您的来稿（来稿请注明您的豆果ID）。</p>
        </div>
      </div>
    </div>
    <!-- 翻页 -->
    <div class="pages">
      <a></a>
      <el-pagination
      background
      layout="prev, pager, next"
      :total="1000">
      </el-pagination>
    </div>
    <!-- 定位 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>豆果美食</el-breadcrumb-item>
      <el-breadcrumb-item>全部文章</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>



<style lang="less" scoped>
@import '~css/public_Css.less';
  .conter{
    overflow: hidden;
  }
  .LeftInfo{
    width: 690px;
    overflow: hidden;
    ul li{
      overflow: hidden;
      margin: 20px 0px;
      img{
        .sizewht(183px, 122px);
        float: left;
        border-radius: 7px;
        margin-right: 10px;
      }
      div{
        h3{
          font-weight: 400;
          font-size: 15px;
          padding-top: 5px;
        }
        p{
          margin-top: 13px;
          font-size: 12px;
          &.time{
            color: #999;
          }
          a{
            font-size: 12px;
          }
        }
      }
    }
  }
  .Rightinfo{
    width: 280px;
    float: right;
    overflow: hidden;
    h2{
      font-weight: 400;
    }
    li{
      margin: 15px 0px;
      overflow: hidden;
      &>a{
        margin-right: 10px;
      }
      img{
        width: 70px;
        height: 70px;
        border-radius: 7px;
      }
      div{
        h4{
          font-size: 15px;
          font-weight: 400;
          color: #333;
        }
        p{
          font-size: 13px;
          color: #999;
          margin-top: 8px;
        }
        font-weight: normal;
      }
    }
    div.laigao{
      margin-top: 50px;
      h3{
        color: #333;
        font-size: 16px;
        margin-bottom: 20px;
      }
      p{
        font-size: 13px;
        line-height: 24px;
      }
    }
  }
  .pages {
      text-align: center;
      margin: 20px auto;
      a {
          padding: 2px 6px 3px;
      }
  }
  div.navbers{
    margin-top: 20px;
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
// import axios from 'axios'
// import md5 from '@/assets/js/md5.js'
export default {
  data () {
    return {
      activeAll: [],
      list: []
    }
  },
  mounted(){
    this.list = this.$store.state.active.newslist
    var qid = this.$route.query.id
    // this.axi(qid)
    this.$store.dispatch('loadAxiosActiv', qid)
  },
  computed: {
    activeALl () {
      return this.$store.state.active.activeAll
    },
    // 监听文章状态是否发生了变化
    astatus () {
      return this.$store.state.active.sts
    }
  },
  watch: {
    activeALl (newValue) {
      this.activeAll = newValue
    },
    // 从新获取数据
    astatus (newva){
      var qid = this.$route.query.id
      this.$store.dispatch('loadAxiosActiv', qid)
    }
  },
  filters: {
    times (val) {
      return val.split('T')[0]
    }
  },
  methods: {
    // 点击刷新文章主题内容
    utactive (val) {
      this.$store.commit('updatests', val)
      this.$router.push({ path: 'FoodNews', query: { id: val } })
    }
  }
}
</script>