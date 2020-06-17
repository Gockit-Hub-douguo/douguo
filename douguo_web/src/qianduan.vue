<template>
    <div id="qianduan">
       <Top v-if="aa"></Top>
      <router-view></router-view>
      <Bootom v-if="aa"></Bootom>
    </div>
</template>

<script>
import Top from './components/common/top'
import Bootom from './components/common/bootom'
export default {
  components: {
    Top,
    Bootom
  },
  computed: {
    aa () {
      return this.$store.state.a
    }
  }
}
</script>
