<template>
    <div class="header">
        <div class="header-box">
            <div class="header-box2">
                <a class="">
                    <img width="91.16px" src="https://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/logo-cn.00c32c62.svg">
                </a>
            </div>
            <div class="header-title">
                <span><a>首页</a></span>
                <span><a>探索</a></span>
                <span><a>标签</a></span>
                <span><a>摄影师</a></span>
                <span><a>签约摄影师</a></span>
            </div>
            <div class="header-box-right"></div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      img: 'https://spcn-webfront.skypixel.com/skypixel/v2/public/assets/images/logo-cn.00c32c62.svg'
    }
  }
}
</script>

<style  scoped>
.header {
    height: 60px;
    background: #000;
    color: #999;
}
.header-box {
    display: flex;
}
.header-box2{
    margin-left: 40px;
    margin-top: 20px;
    margin-right: 50px;
}
.header-title {
    line-height: 60px;
}
.header-title span a {
    font-size: 14px;
    margin-left: 20px;
}
.header-title span a:hover {
    color: #fff;
}
.header-box-right {
    float: right;
    font-size: 20px;
}
</style>
