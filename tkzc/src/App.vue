<template>
  <div id="app">
    <div>
      <Header></Header>
      <router-view></router-view>
      <Footer></Footer>
    </div>
  </div>
</template>

<style lang="less">

</style>

<script>

import Header from 'common/Header'
import Footer from 'common/Footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
