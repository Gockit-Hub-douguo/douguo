<template>
    <!-- 豆果达人 -->
    <li>
      <el-link :underline="false"  class="fl"><img src="https://cp1.douguo.com/upload/photo/b/d/a/u6158987842928806271321.png" alt=""></el-link>
      <div class="fl">
        <i><el-link :underline="false" class="h-orange fl">颖涵的快厨房</el-link><span class="fl" :style="{background:'url(https://i1.douguo.com/upload/note/d/a/a/da84247847aebe48d9dd0fcdac88862a.png)', backgroundSize:'16px 16px'}"></span></i>
        <p>144734粉丝</p>
      </div>
      <el-button plain class="fr" @click="follow()">{{btnvalue}}</el-button>
    </li>
</template>

<script>
export default {
  data () {
    return {
      btnvalue: '+ 关注'
    }
  },
  methods: {
    follow () {
      this.btnvalue = this.btnvalue === '+ 关注' ? '以关注' : '+ 关注'
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~privatecss/home.less';
  // @import '~css/public_Css.less';
</style>
