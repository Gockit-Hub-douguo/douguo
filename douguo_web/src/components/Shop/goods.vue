<template>
    <div>
        <div :key="index" v-for="(item, index) in goodsxq" class="content">
            <div class="goods-info">
                <div class="goods-simg" style="overflow-y: hidden">
                    <div class="img-box img-border">
                        <img style="width: 56px" :src="item.fimgurl" alt="">
                    </div>
                </div>
                <div class="goods-bimg">
                    <img style="width: 320px" :src="item.fimgurl" alt="">
                </div>
                <div class="info">
                    <h3 class="goods-name">{{item.fname}}</h3>
                    <p class="description">{{item.nexttitle}}</p>
                    <div class="sell-info">
                        <span class="price">￥{{item.fnowprice}}</span>
                        <s class="old-price">￥{{item.fnowprice}}</s>
                        <div class="other">
                            <span>月售: {{item.ammount}}</span>
                            <span>发货地: {{item.originadrr}}</span>
                        </div>
                    </div>
                    <div class="buymod">
                        <div class="buy-num">
                            <template>
                                <el-input-number size="mini" v-model="num" :min="1" :max="10" label="描述文字"></el-input-number>
                            </template>
                        </div>
                        <el-button @click="dialogVisible = true"  class="buy" size="small" type="warning" onclick="$('.buy-box').show()">立即购买</el-button>
                        <div class="buy-box">
                            <el-dialog
                            
                            :visible.sync="dialogVisible"
                            width="30%"
                            :before-close="handleClose">
                            <span><img class="wb100" src="https://i1.douguo.com//upload/banner/1546829378.png" alt=""></span>
                            <span slot="footer" class="dialog-footer">
                                <!-- <el-button @click="dialogVisible = false">取 消</el-button> -->
                                <el-button type="primary" @click="dialogVisible = false">关 闭</el-button>
                            </span>
                            </el-dialog>
                        </div>
                    </div>
                </div>
            </div>
            <div class="goods-img">
                <h3>商品详情</h3>
                <img width="100%" :src="item.fimg1" alt="">
                <img width="100%" :src="item.fimg2" alt="">
                <img width="100%" :src="item.fimg3" alt="">
                <img width="100%" :src="item.fimg4" alt="">
                <img width="100%" :src="item.fimg5" alt="">
                <img width="100%" :src="item.fimg6" alt="">
                <img width="100%" :src="item.fimg7" alt="">
                <img width="100%" :src="item.fimg8" alt="">
                <img width="100%" :src="item.fimg9" alt="">
                <img width="100%" :src="item.fimg10" alt="">
            </div>
            <div class="advis">
                <h3>购买须知 & 商品咨询</h3>
                <p>下载豆果美食App，了解更多商品详情</p>
                <img src="https://cp1.douguo.com//static/nweb/images/qrcode.png?1912" alt="">
            </div>
            <p class="fss">
                你当前的位置：
                <router-link to="/">豆果美食</router-link>
                >
                <a>豆果美食</a>
                > 商城
            </p>
        </div>
    </div>
</template>

<script>
  export default {
    created(){
        this.$store.commit("changeindex",this.$route.query.id)
        this.$store.dispatch('sgetgoodscomtianer')
    },
    data() {
        console.log(this.$store.state.id)
      return {
        dialogVisible: false,
        num: 1
      };
    },
    computed: {
        goodsxq(){
            return this.$store.state.getgoodscomtianer
        }
    },
    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      }
    }
  };
</script>

<style lang="less" scoped>
@import '~@/assets/css/goods.less';
</style>
