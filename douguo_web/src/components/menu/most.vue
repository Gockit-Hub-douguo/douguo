<template>
  <!-- 收藏最多 -->
  <div>
    <!-- 菜单层 -->
    <div class="navbars">
      <div class="Firstlevelnavigation">
        <router-link to='/Menu' class="active">菜谱</router-link>
        <router-link to='/mofu'>菜单</router-link>
        <router-link to='/Menuuser'>用户</router-link>
      </div>
      <h3>做过最多</h3>
      <div class="Secondarynavigation">
        <router-link to='/Menu'>综合最佳</router-link>
        <span>|</span>
        <router-link to='/Menumaxmoust'>收藏最多</router-link>
        <span>|</span>
        <router-link to='#' class="active">做过最多</router-link>
      </div>
    </div>
    <div class="conter">
      <!-- 内容层 -->
      <shopping></shopping>
      <!-- 广告位 -->
      <div class="Right fr">
        <adsense></adsense>
      </div>
    </div>  
    <!-- 翻页 -->
    <div class="pages">
      <a></a>
      <el-pagination
      background
      layout="prev, pager, next"
      :total="1">
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
  @import '~privatecss/menu.less';
</style>

<script>
  import adsense from '@/components/FoodNews/slidergg'
  import shopping from './ShoppingRendering'
  export default {
    data() {
      return {
        value: 4.8
      }
    },
    components: {
      adsense,
      shopping
    }
  }
</script>
