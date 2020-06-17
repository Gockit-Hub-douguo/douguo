<template>
  <div class="yth-bijixq">
    <!-- 笔记详情右边 -->
    <div class="yth-bijixq-left">
      <div class="yth-bijixq-datu">
       <el-carousel style="width:690px" height="390px">
        <el-carousel-item style="height:390px" v-for="item in 4" :key="item">
          <h3 style="height:390px" class="small" :style="{background:'url('+list+')'}">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
      </div>
      <div class="yth-bijixq-xiaotu">
        <img src="https://cp1.douguo.com/upload/note/f/1/6/750_f1b533a868df6114c00eb2e45863d566.jpg">
        <img src="https://cp1.douguo.com/upload/note/5/3/d/750_53acfed9340e97e2cc8697ed4fecd76d.jpg">
        <img src="https://cp1.douguo.com/upload/note/e/d/4/750_ed35fb9ff01e37f7f403e029a5818e14.jpg">
        <img src="https://cp1.douguo.com/upload/note/7/5/1/750_75a97cd59ee18c3dc369a8ecd16fbf21.jpg">
        <img src="https://cp1.douguo.com/upload/note/0/f/d/750_0f87fe920c4f8cdac6891e7a66f0e7dd.jpg">
        <img src="https://cp1.douguo.com/upload/note/f/2/8/750_f2ec241cab8d86dca5ed4fc85ce08538.jpg">
      </div>
      <div class="yth-bijixq-tetle">#猫妈Lyp手工坊#樱桃酱</div>
      <div class="yth-bijixq-shouchang">
        <el-avatar style="margin-top:20px;" src="https://tx1.douguo.com/upload/photo/2/9/f/70_u72990885732571184537.jpg"></el-avatar>
        <a style="margin-top:-20px;">猫妈Lyp</a>
        <button class="el-icon-plus yth-bijixq-right3">关注</button>
        <button class="el-icon-star-off yth-bijixq-right2">收藏</button>
        <button class="el-icon-star-off yth-bijixq-right1">66</button>
        <div class="yth-bijixq-shuoshuo"># “爸”气十足的美食# 让美食替你说爱</div>
        <div class="yth-bijixq-shij">创建时间:2分钟前</div>
      </div>
      <div class="yth-bijixq-pingl">
        <div class="yth-bijixq-pingl-a">评论</div>
        <div class="yth-bijixq-pingl-b">暂无评论</div>
      </div>
      <div style="margin-top:20px;" class="yth-bijixq-left-weizi">
        <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">你当前的位置:</el-breadcrumb-item>
        <el-breadcrumb-item>豆果美食</el-breadcrumb-item>
        <el-breadcrumb-item>笔记</el-breadcrumb-item>
        <el-breadcrumb-item>#猫妈Lyp手工坊#樱桃酱</el-breadcrumb-item>
      </el-breadcrumb>
      </div>
    </div>
    <!-- 笔记详情左边 -->
    <div class="yth-bijixq-right">
      <div>相关笔记
        <ul>
          <li class="yth-bijixq-right-tu">
            <img class="right-img" src="https://cp1.douguo.com/upload/note/f/1/6/320_f1b533a868df6114c00eb2e45863d566.jpg" >
            <a class="right-zhit">
              <div>今日健康营养早餐</div>
              <div class="el-icon-star-off yth-biji-right-shouchang">14</div>
            </a>
          </li>
          <li class="yth-bijixq-right-tu">
            <img class="right-img" src="https://cp1.douguo.com/upload/note/f/1/6/320_f1b533a868df6114c00eb2e45863d566.jpg" >
            <a class="right-zhit">
              <div>今日健康营养早餐</div>
              <div class="el-icon-star-off yth-biji-right-shouchang">14</div>
            </a>
          </li>
          <li class="yth-bijixq-right-tu">
            <img class="right-img" src="https://cp1.douguo.com/upload/note/f/1/6/320_f1b533a868df6114c00eb2e45863d566.jpg" >
            <a class="right-zhit">
              <div>今日健康营养早餐</div>
              <div class="el-icon-star-off yth-biji-right-shouchang">14</div>
            </a>
          </li>
          <li class="yth-bijixq-right-tu">
            <img class="right-img" src="https://cp1.douguo.com/upload/note/f/1/6/320_f1b533a868df6114c00eb2e45863d566.jpg" >
            <a class="right-zhit">
              <div>今日健康营养早餐</div>
              <div class="el-icon-star-off yth-biji-right-shouchang">14</div>
            </a>
          </li>
          <li class="yth-bijixq-right-tu">
            <img class="right-img" src="https://cp1.douguo.com/upload/note/f/1/6/320_f1b533a868df6114c00eb2e45863d566.jpg" >
            <a class="right-zhit">
              <div>今日健康营养早餐</div>
              <div class="el-icon-star-off yth-biji-right-shouchang">14</div>
            </a>
          </li>
        </ul>
        <div class="yth-bijixq-right-c">
            <el-image :src= "'https://cp1.douguo.com/upload/note/9/1/b/750_91144924cf17d0dab34943d77de0186b.jpg'"></el-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: 'https://cp1.douguo.com/upload/note/9/1/b/750_91144924cf17d0dab34943d77de0186b.jpg'
      //         'https://cp1.douguo.com/upload/note/5/3/d/750_53acfed9340e97e2cc8697ed4fecd76d.jpg'
      //         'https://cp1.douguo.com/upload/note/e/d/4/750_ed35fb9ff01e37f7f403e029a5818e14.jpg'
      //         'https://cp1.douguo.com/upload/note/7/5/1/750_75a97cd59ee18c3dc369a8ecd16fbf21.jpg'
      //         'https://cp1.douguo.com/upload/note/0/f/d/750_0f87fe920c4f8cdac6891e7a66f0e7dd.jpg'
      //         'https://cp1.douguo.com/upload/note/f/2/8/750_f2ec241cab8d86dca5ed4fc85ce08538.jpg'
    }
  }
}
</script>

<style scoped lang="less">
@import '~@/assets/css/public.less';
.yth-bijixq {
  .size(1000px, 100%);
  margin: 0 auto;
  margin-top: 85px;
  overflow: hidden;
  .yth-bijixq-left{
    float:left;
    .size(690px, 100%);
    .yth-bijixq-datu {
      .size(690px, 390px);
      text-align: center;
      background: #cccccc;
      line-height: 390px;
      .el-icon-arrow-left{
        border-radius: 50%;
        background: #ffffff;
        font-size:40px;
      }
      .img{
        .size(300px, 100%);
      }
      .el-icon-arrow-right{
        border-radius: 50%;
         background: #ffffff;
        font-size:40px;
      }
    }
    .yth-bijixq-xiaotu {
      .size(690px, 100%);
      text-align: center;
      img{
        .size(50px, 50px);
        .margin(20px, 0, 0, 20px);
      }
    }
    .yth-bijixq-tetle {
      .font-size(20px);
      color:#000000;
      .margin(20px, 0, 0, 0)
    }
    .yth-bijixq-right3{
      .size(78px, 28px);
      border:1px solid #000000;
      border-radius: 5px;

      .margin(0, 0, 0, 20px);
    }
    .yth-bijixq-right2{
      float:right;
      .size(78px, 32px);
      border:1px solid gold;
      border-radius: 5px;
      .margin(20px, 0, 0, 20px);
      background: gold;
    }
    .yth-bijixq-right1{
      float:right;
      .size(78px, 32px);
      border:1px solid gold;
      border-radius: 5px;
      .margin(20px, 0, 0, 20px);
      color:gold;
    }
    .yth-bijixq-shuoshuo{
      .font-size(20px);
      .margin(20px, 0, 0, 0);
    }
    .yth-bijixq-shij{
      .font-size(12px);
      .margin(20px, 0, 20px, 0)
    }
    .yth-bijixq-pingl{
      .size(690px, 100%);
      .margin(20px, 0, 0, 0);
      .font-size(16px);
      .yth-bijixq-pingl-a{
        .padding(20px, 0, 0, 20px)
      }
      .yth-bijixq-pingl-b{
        text-align: center;
        .margin(0px, 0, 100px, 0)
      }
    }
  }
  .yth-bijixq-right{
    float:left;
    .margin(0, 0, 0, 20px);
    .font-size(20px);
    .yth-bijixq-right-tu{
      overflow: hidden;
      .right-img{
        float:left;
        .size(88px, 88px);
        .margin(20px, 0, 0, 0);
      }
      .right-zhit{
        float:left;
        .font-size(12px);
        .margin(20px, 0, 0, 0);
        .yth-biji-right-shouchang {
          .margin(60px, 0, 0, 0)
        }
      }
    }
    .yth-bijixq-right-c{
      .size(88px, 88px);
    }
  }
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
