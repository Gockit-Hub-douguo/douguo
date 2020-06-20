<template>
    <div id="qianduan">
       <Top v-if="aa"></Top>
      <router-view v-if="isRouterAlice"></router-view>
      <Bootom v-if="aa"></Bootom>
    </div>
</template>

<script>
import Top from './components/common/top'
import Bootom from './components/common/bootom'
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlice: true
    }
  },
  methods: {
    reload () {
      this.isRouterAlice = false
      this.$nextTick(function () {
        this.isRouterAlice = true
      })
    }
  },
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
