<template>
  <!-- 菜谱组件 -->
  <div>
    <div class="Selectedrecipes">
      <!-- 标题 -->
      <div class="menuTitle">
        <h3 class="fl">每日精选菜谱</h3> <el-link type='primary'  :underline="false" class="fr">更多 ></el-link>
      </div>
      <!-- 内容层 -->
      <ul class="menuList">
        <li v-for="(item, index) in indexwoks" :key="index" :class="{clearMR: index == 3 || index == 7}">
          <div class="menuOne">
            <a><img :src="item.wimgUrl" alt=""></a>
            <p class="Mtitle"><a>{{item. works_title}}</a></p>
            <p class="Mauthor">by <a>{{item. username + index}}</a></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import '~privatecss/home.less';
  // @import '~css/public_Css.less';
</style>

<script>
export default {
  created(){
        this.$store.dispatch('getworkslist')
      },
  // 接收传递的参数
  props: {
    datalists: Array
  },
  computed: {
    indexwoks(){
      const list = []
      for(var i = 0; i < 8; i++){
        list.push(this.$store.state.worksList[i])
      }
      return list
    }
  }
}
</script>
