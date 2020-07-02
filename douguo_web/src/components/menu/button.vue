<template>
  <el-button plain class="fr" @click="follow()">{{btnvalue}}</el-button>
</template>

<style lang="less" scoped>
  button{
    width: 80px;
    height: 30px;
    line-height: 0px;
    &:focus{
      outline: none;
    }
  }
</style>

<script>
// export default {
//   data () {
//     return {
//       btnvalue: '+ 关注'
//     }
//   },
//   methods: {
//     follow () {
//       this.btnvalue = this.btnvalue === '+ 关注' ? '已关注' : '+ 关注'
//     }
//   }
// }
import axios from 'axios'
import md5 from '@/assets/js/md5'
export default {
  props: {
    userid: Number
  },
  data () {
    return {
      btnvalue: '+ 关注'
    }
  },
  methods: {
    follow () {
      if(this.btnvalue === '+ 关注'){
        this.ajax(this.userid, 1)
      }else{
        this.ajax(this.userid, 0)
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
          this.$store.dispatch('loadAxiosuerby', 0)
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
