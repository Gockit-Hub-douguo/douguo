<template>
  <!-- 商品数据渲染组件 -->
  <div class="LeftInfo fl">
    <ul>
      <li v-for="it in 9" :key="it">
        <img src="https://cp1.douguo.com/upload/caiku/b/1/5/400x266_b180f00d384474e7007a90cc686de155.jpeg" alt="">
        <div>
          <h3>【轻乳酪蛋糕】用心打造完美奶酪蛋糕</h3>
          <p class="author">鸡蛋,奶油奶酪,低筋面粉,牛奶 </p>
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