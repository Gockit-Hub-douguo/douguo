<template>
  <div>
    <div class="navbers">
      <router-link to='/FoodNews' :class="{active: 1}" >全部文章</router-link>
      <router-link to='/Foodartheme' :class="{active: 0}">全部主题站</router-link>
    </div>
    <div class="boxleft">
      <!-- 标题处 -->
      <div class="titleB">
        <h3>{{active[0].title}}</h3>
        <p>
          <a>来自 : {{active[0].source}}</a>
          <a>作者 : {{active[0].athour}}</a>
          <span>{{active[0].times | tims}}</span>
          <i>565次阅读</i>
        </p>
      </div>
      <!-- 文章内容 -->
      <div class="bodys" v-html="active[0].lab">
      </div>
      <div>本文版权属于豆果美食（douguo.com），转载请注明出处。商业使用请 联系豆果美食</div>
    </div>
    <div class="fr">
      <gg></gg>
      <gg></gg>
    </div>
  </div>
</template>

<style lang="less" scoped>
  .fr{
    margin-top: 50px;
    float: right;
  }
 /deep/ .bodys{
    width: 690px;
    line-height: 30px;
    img{
      width: 690px;
    }
  }
  .boxleft{
    width: 690px;
    float: left;
    .titleB{
      width: 100%;
      overflow: hidden;
      padding-bottom: 20px;
      margin-bottom: 10px;
      border-bottom: 1px solid #E5E3DF;
      h3{
        font-size: 24px;
        color: #000;
        text-align: center;
        padding: 20px 0px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p{
        a{
          color: #000;
        }
        a,span,i{
          float: left;
          font-size: 15px;
          margin-right: 20px;
          font-style: normal;
        }
        span,i{
          color: #999;
        }
      }
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
import axios from 'axios'
import md5 from '@/assets/js/md5'
import gg from './slidergg'
export default {
  data () {
    return {
      active: [{ title: '', times: '1T1:1:0' }]
    }
  },
  methods: {
    axi () {
      var uid = this.$route.query.id
      var timegtime = new Date().getTime()
      var publicwords = md5((timegtime + 1000) * 2)
      axios({
        url: 'http://topyun.qicp.vip/getarticle',
        method: 'get',
        params: {
          uid: uid,
          publicwords,
          timegtime
        }
      }).then((rtn) =>{
        this.active = rtn.data.list
      }).catch(er => {
        console.log(er)
      })
    }
  },
  created () {
    this.axi()
  },
  filters: {
    tims (va) {
      var t = va.split('T')
      var t1 = t[1]
      t1 = t1.split('.')[0]
      var t2 = t1.split(':')[0]
      t2 = parseInt(t2) + 8
      var t3 = t1.split(':')
      return t[0] + ' ' + t2 + ':' + t3[1] + ':' + t3[2]
    }
  },
  components: {
    gg
  }
}
</script>
