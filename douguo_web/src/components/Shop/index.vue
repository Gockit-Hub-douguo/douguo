<template>
    <div>
        <div class="shop-content">
            <ul class="goods-list">
                <li :key="key" v-for="(item, key) in xgoodsList" class="goods">
                    <router-link to="/goods">
                      <img width="240px" :src="item.fimgurl">
                    </router-link>
                    <router-link to="/goods"><h3>{{item.fname}}</h3></router-link>
                    <div class="goodsinfo">
                        <span class="price">￥{{item.fnowprice}}</span>
                        <span class="old-price">￥{{item.foriginPrice}}</span>
                        <span class="volume">月销{{item.fsaleCount || '5000'}}</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created(){
    return this.$store.dispatch('getdggoods')
  },
  computed: {
    xgoodsList(){
      return this.$store.state.goodslist
    }
  }
}
</script>

<style scoped lang="less">
@import '~@/assets/css/lj-bile.less';
@import '~@/assets/css/goods.less';
</style>
