<template>
  <div class="slider_box">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="index in bannerList" :key="index.keywords">
        <h3 class="medium" :style="{background: 'url(http://topyun.qicp.vip/' + index.imgurl + ')',backgroundSize: '100% 100%'}"></h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="less" scoped>
  @import '~privatecss/home.less';
</style>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      bannerList: []
    }
  },
  methods: {
    ajax () {
      axios({
        url: 'http://topyun.qicp.vip/getSlider',
        method: 'get',
        data: {
          uid: 1
        }
      }).then((reslut) => {
        console.log(reslut)
        if(parseInt(reslut.data.status) === 200) {
          this.bannerList = reslut.data.list
        }
      }).catch(function(er){
        console.log(er)
      })
    }
  },
  mounted () {
    this.ajax()
  }
}
</script>
