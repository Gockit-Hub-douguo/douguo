<template>
  <!-- 商品数据渲染组件 -->
  <div class="LeftInfo fl">
    <ul>
      <li v-for="it in 9" :key="it">
        <img src="https://cp1.douguo.com/upload/caiku/e/f/9/400x266_ef1b8a39fa93c683e9328ae0d82bf289.jpg" alt="">
        <div>
          <h3>鱼香肉丝</h3>
          <p class="author">猪里脊肉,冬笋,胡萝卜,黑木耳,葱末,姜末,蒜末,剁椒,水淀粉</p>
          <p class="time">
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}分">
            </el-rate>
          </p>
          <p class="linkurl">
            <router-link to='#'>
              <img src="https://tx1.douguo.com/upload/photo/4/9/7/70_u99657481.jpg" alt="">
              <em class="fl">月亮晶晶</em>
              <span class="fl iconx"></span>
            </router-link>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
  @import '~privatecss/menu.less';
</style>

<script>
export default {
  data() {
    return {
      value: 4.7
    }
  }
}
</script>