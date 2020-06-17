<template>
  <el-button plain class="fr" @click="follow()">{{btnvalue}}</el-button>
</template>

<style lang="less" scoped>
  button{
    width: 80px;
    height: 30px;
    line-height: 0px;
    &:focus{
      outline: none;
    }
  }
</style>

<script>
export default {
  data () {
    return {
      btnvalue: '+ 关注'
    }
  },
  methods: {
    follow () {
      this.btnvalue = this.btnvalue === '+ 关注' ? '已关注' : '+ 关注'
    }
  }
}
</script>
