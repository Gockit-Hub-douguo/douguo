<template>
    <div class="yth-ccuangj">
        <div class="yth-cuangj">创建菜单
            <el-input class="yth-cuangj-input" type="textarea" placeholder="菜单名称(必填，30字以上)" ></el-input>
            <el-input class="yth-cuangj-shuru" type="textarea" placeholder="菜单介绍(选填)" v-model="textarea"></el-input>
        </div>
        <div class="yth-cuangj">添加菜谱
            <span class="yth-tijia">(填入豆果美食的食谱地址或食谱ID来添加菜谱，如https://www.douguo.com/cookbook/64339.html或者64339)</span>
            <el-input class="yth-cuangj-input" type="textarea" ></el-input>
            <el-input class="yth-cuangj-input" type="textarea" ></el-input>
            <el-input class="yth-cuangj-input" type="textarea" ></el-input>
            <el-input class="yth-cuangj-input" type="textarea" ></el-input>
            <el-input class="yth-cuangj-input" type="textarea" ></el-input>
            <el-button type="warning">添加</el-button>
        </div>
        <div class="yth-caidanbj">
          <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <div class="yth-caidanbj-clor">添加菜单背景图<span class="yth-caidanbj-clor-a">(可选)</span></div>
          </el-upload>
        </div>
        <div class="yth-yizhengm">
          <div class="yth-yzm">验证码:</div>
          <el-input class="yth-yizhengm-input" type="textarea" ></el-input>
        </div>
        <div class="yth-cuangj">
          <el-button type="warning" @click= "open">提交</el-button>
        </div>
    </div>
</template>

<style scoped lang="less">
@import "~@/assets/css/public.less";
.yth-ccuangj{
  .size(1000px, 100%);
  margin: 0 auto;
  margin-top: 85px;
}
.yth-cuangj {
  margin: 0 auto;
  .margin(20px, 0, 20px, 20px);
  .font-size(18px);
  color:#000;
  /deep/.yth-cuangj-input textarea {
    .margin(30px, 0, 0, 0);
    .size(690px, 42px);
    .padding(0, 0, 0, 20px);
    line-height: 42px;
    .font-size(15px);
  }
  /deep/.yth-cuangj-shuru textarea {
    .margin(30px, 0, 0, 0);
    .padding(20px, 0, 0, 20px);
    .size(690px, 170px);
    .font-size(15px);
  }
  .yth-tijia {
    .font-size(12px);
  }
  .el-button {
    .margin(30px, 0, 0, 0);
    .size(90px, 42px);
    background: goldenrod;
    color:#fff;
    .border-radius(5px)
  }
}
/deep/ .yth-caidanbj .avatar-uploader .el-upload{
    .size(345px, 195px);
    .margin(0, 0, 0, 20px);
    background: #ccc;
    text-align: center;
}
.yth-caidanbj-clor {
  .font-size(15px);
}
.yth-caidanbj-clor-a {
  .font-size(12px);
}
.yth-yizhengm {
  .margin(20px, 0, 0, 20px);
  .font-size(20px);
  overflow: hidden;
  display:block;
}
.yth-yzm {
  float: left;
  line-height: 42px;
}
/deep/.yth-yizhengm-input textarea {
  .margin(0, 0, 0, 20px);
  .size(200px, 42px);
  float: left;
}
</style>
