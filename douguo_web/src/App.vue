<template>
  <div id="app">
      <Top></Top>
      <router-view></router-view>
      <Bootom></Bootom>
  </div>
</template>

<script>
import Top from './components/common/top'
import Bootom from './components/common/bootom'
export default {
  components: {
    Top,
    Bootom
  }
}
</script>
