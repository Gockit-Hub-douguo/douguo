<template>
  <!-- 商品数据渲染组件 -->
  <div class="LeftInfo fl">
    <ul>
      <li v-for="it in indexwoks" :key="it">
        <img :src="it.wimgUrl" alt="">
        <div>
          <h3>{{it.works_title}}</h3>
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
              <img :src="it.userphoto" alt="">
              <em class="fl">{{it.username}}</em>
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
  created(){
        this.$store.dispatch('getworkslist')
      },
  data() {
    return {
      value: 4.7
    }
  },
  computed: {
    indexwoks(){
      const list = []
      for(var i = 0; i < 6; i++){
        list.push(this.$store.state.worksList[i])
      }
      return list
    }
  }
}
</script>