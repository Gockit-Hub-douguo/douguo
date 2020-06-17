<template>
  <div class="foodinfo">
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}

</script>
<style lang="less" scoped>
  .foodinfo{
    padding-top: 60px;
    width: 1000px;
    margin: auto;
  }
</style>
