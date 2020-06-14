<template>
    <div>
        <div class="shop-content">
            <ul class="goods-list">
                <li :key="key" v-for="(item, key) in goodsList" class="goods">
                    <router-link to="/goods">
                      <img width="240px" src="https://cp1.douguo.com/upload/tuan/a/a/9/448_aa8d00ce4df570c890ce3372fb721b09.jpg">
                    </router-link>
                    <router-link to="/goods"><h3>贝贝南瓜净重5斤</h3></router-link>
                    <div class="goodsinfo">
                        <span class="price">￥25.90</span>
                        <span class="old-price">￥45.00</span>
                        <span class="volume">月销500</span>
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
      goodsList: [{
        img: 'https://cp1.douguo.com/upload/tuan/a/a/9/448_aa8d00ce4df570c890ce3372fb721b09.jpg'
      }, {
        img: 'https://cp1.douguo.com/upload/tuan/6/1/1/448_6156cba3d6977b2caf8d15f7c5762631.jpg'
      }, {
        img: 'https://cp1.douguo.com/upload/tuan/a/a/9/448_aa8d00ce4df570c890ce3372fb721b09.jpg'
      }, {
        img: 'https://cp1.douguo.com/upload/tuan/a/a/9/448_aa8d00ce4df570c890ce3372fb721b09.jpg'
      }, {
        img: 'https://cp1.douguo.com/upload/tuan/a/a/9/448_aa8d00ce4df570c890ce3372fb721b09.jpg'
      }, {
        img: 'https://cp1.douguo.com/upload/tuan/a/a/9/448_aa8d00ce4df570c890ce3372fb721b09.jpg'
      }, {
        img: 'https://cp1.douguo.com/upload/tuan/a/a/9/448_aa8d00ce4df570c890ce3372fb721b09.jpg'
      }, {
        img: 'https://cp1.douguo.com/upload/tuan/a/a/9/448_aa8d00ce4df570c890ce3372fb721b09.jpg'
      }, {
        img: 'https://cp1.douguo.com/upload/tuan/a/a/9/448_aa8d00ce4df570c890ce3372fb721b09.jpg'
      }, {
        img: 'https://cp1.douguo.com/upload/tuan/a/a/9/448_aa8d00ce4df570c890ce3372fb721b09.jpg'
      }, {
        img: 'https://cp1.douguo.com/upload/tuan/a/a/9/448_aa8d00ce4df570c890ce3372fb721b09.jpg'
      }, {
        img: 'https://cp1.douguo.com/upload/tuan/e/d/a/448_ed828309c5c2ba2fdab713c05fbce87a.jpg'
      }]
    }
  }
}
</script>

<style scoped lang="less">
@import '~@/assets/css/lj-bile.less';
@import '~@/assets/css/goods.less';
</style>
