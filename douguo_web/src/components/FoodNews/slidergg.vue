<template>
  <div>
      <!-- 广告轮播组件 宽度为298 -->
      <div class="searchSlider fr">
        <el-carousel height="248px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small" :style="{background:'url('+xuni+')'}">广告{{item}}号位招租</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
  </div>
</template>

<style lang="less" scoped>
  .searchSlider{
    width: 280px;
    height: 248px;
    margin-bottom: 20px;
    h3{
      height: 248px;
      display: block;
      background: #ccc;
      color: #fff;
      font-size: 15px;
      line-height: 248px;
      text-align: center;
    }
    /deep/ & li.el-carousel__indicator--horizontal {
      display: inline-block;
      padding: 12px 2px;
    }
  }
</style>

<script>
import xuni from '@/assets/img/xx.jpg'
export default {
  data () {
    return {
      xuni
    }
  }
}
</script>
