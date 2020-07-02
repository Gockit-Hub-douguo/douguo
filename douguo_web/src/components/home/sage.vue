<template>
    <!-- 豆果达人 -->
    <li>
      <el-link :underline="false"  class="fl"><img :src="userinfo.userimg" alt=""></el-link>
      <div class="fl">
        <i><router-link :to="{path: '/shoucang', query:{uid: userinfo.userkey}}" class="h-orange fl">{{userinfo.userasname}}</router-link><span v-if="userinfo.stas" class="fl" :style="{background:'url(https://i1.douguo.com/upload/note/d/a/a/da84247847aebe48d9dd0fcdac88862a.png)', backgroundSize:'16px 16px'}"></span></i>
        <p>{{userinfo.fans}}粉丝</p>
      </div>
      <el-button plain class="fr" @click="follow()">{{btnvalue}}</el-button>
    </li>
</template>

<script>
import axios from 'axios'
import md5 from '@/assets/js/md5'
export default {
  props: {
    userinfo: Object
  },
  data () {
    return {
      btnvalue: '+ 关注'
    }
  },
  methods: {
    follow () {
      if(this.btnvalue === '+ 关注'){
        this.ajax(this.userinfo.userkey, 1)
      }else{
        this.ajax(this.userinfo.userkey, 0)
      }
    },
    ajax (uid, ad) {
      var timegtime = new Date().getTime()
      var publicwords = md5((timegtime + 1000) * 2)
      axios({
        url: 'http://topyun.qicp.vip/userfans',
        method: 'GET',
        params: {
          uid: uid,
          timegtime,
          publicwords,
          classif: ad
        }
      }).then(rt => {
        if(rt.data.status === 200){
          this.btnvalue = this.btnvalue === '+ 关注' ? '已关注' : '+ 关注'
          this.$store.dispatch('loadAxiosuerby')
        }else{
          this.btnvalue = '+ 关注'
        }
      }).catch(er => {
        this.btnvalue = '+ 关注'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~privatecss/home.less';
  // @import '~css/public_Css.less';
</style>
