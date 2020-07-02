<template>
  <!-- 商品数据渲染组件 -->
  <div class="LeftInfo fl">
    <ul>
      <li v-for="(it, k) in ssslist" :key="k">
        <router-link :to="{path:'/caipinxianqi',query:{id:k}}">
          <img :src="it.wimgUrl" alt="">
        </router-link>
        <div>
          <h3>{{it.works_title}}</h3>
          <p class="author">{{it.works_class}}</p>
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
            <router-link to="#">
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
      value: 4.7,
      ssslist: []
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
  },
  watch: {
    indexwoks (newval) {
      for(var i = 0; i < newval.length + 10; i++){
        var rdm = Math.floor(Math.random() * newval.length)
        newval.push(newval[rdm])
        newval.splice(rdm,1)
      }
      this.ssslist = newval
    }
  }
}
</script>