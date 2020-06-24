<template>
  <!-- 热门食材 -->
  <div>
    <ul class="IngredientsLists">
      <li v-for="(it, index) in list" :key="index" :class="{clearmr: index % 6}">
        <el-link :underline="false" class="h-orange">
          <img :src="it.imgurl" alt="">
          <p>{{it.title}}</p>
        </el-link>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
  @import '~privatecss/home.less';
</style>

<script>
export default {
  data () {
    return {
      list: [{
        title: '土豆',
        imgurl: 'https://cp1.douguo.com/upload/shicai/1446028243.jpg'
      }, {
        title: '牛肉',
        imgurl: 'https://cp1.douguo.com/upload/shicai/1445843485.jpg'
      }, {
        title: '鱼',
        imgurl: 'https://cp1.douguo.com/upload/shicai/1446101153.jpg'
      }, {
        title: '白菜',
        imgurl: 'https://cp1.douguo.com/upload/shicai/1446100075.jpg'
      }, {
        title: '茄子',
        imgurl: 'https://cp1.douguo.com/upload/shicai/1445843901.jpg'
      }, {
        title: '鲍鱼',
        imgurl: 'https://cp1.douguo.com/upload/shicai/1446100288.jpg'
      }, {
        title: '山药',
        imgurl: 'https://cp1.douguo.com/upload/shicai/1446026894.jpg'
      }, {
        title: '柿子',
        imgurl: 'https://cp1.douguo.com/upload/baike/170/joa_k.jpg'
      }, {
        title: '羊肉',
        imgurl: 'https://cp1.douguo.com/upload/shicai/1445928509.jpg'
      }, {
        title: '菊花',
        imgurl: 'https://cp1.douguo.com/upload/baike/75/cioj_ec.jpg'
      }, {
        title: '香蕉',
        imgurl: 'https://cp1.douguo.com/upload/shicai/1446014125.jpg'
      }, {
        title: '板栗',
        imgurl: 'https://cp1.douguo.com/upload/shicai/1445843253.jpg'
      }]
    }
  }
}
</script>
