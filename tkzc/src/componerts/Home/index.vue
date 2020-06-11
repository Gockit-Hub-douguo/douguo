<template>
    <div>
        <div></div>
        <Swiper :hometype="item" :key="index" v-for="(item, index) in typeList"></Swiper>
    </div>
</template>

<script>
import Swiper from './swiper'
export default {
  components: {
    Swiper
  },
  computed: {
    typeList () {
      return this.$store.state.home.typeList
    }
  },
  created () {
    this.$store.dispatch('home/actionGetTypeList')
  }
}
</script>
