<template>
    <div class="yth-ccuangj">
        <div class="yth-cuangj">创建菜单
            <el-input class="yth-cuangj-input" type="textarea" placeholder="菜单名称(必填，30字以上)" v-model="textarea" ></el-input>
            <el-input class="yth-cuangj-shuru" type="textarea" placeholder="菜单介绍(选填)" v-model="textarea"></el-input>
        </div>
        <div class="yth-cuangj">添加菜谱
            <span class="yth-tijia">(填入豆果美食的食谱地址或食谱ID来添加菜谱，如https://www.douguo.com/cookbook/64339.html或者64339)</span>
            <input style="width:690px; height:42px; margin-top:20px;" class="input2" v-model="textarea"/>
            <input style="width:690px; height:42px; margin-top:20px;" class="input3" v-model="textarea"/>
            <input style="width:690px; height:42px; margin-top:20px;" class="input4" v-model="textarea"/>
            <input style="width:690px; height:42px; margin-top:20px;" class="input5" v-model="textarea"/>
            <el-button type="warning">添加</el-button>
        </div>
        <div class="yth-caidanbj">
          <el-upload class="avatar-uploader" action="#" :auto-upload= "false" list-type="picture-card">
            <i slot="default" class="el-icon-plus avatar-uploader-icon yth-caidanbj-tu"></i> 
              添加菜单背景图
              <span class="yth-caidanbj-clor-a">(可选)</span>
            <div slot="file" slot-scope="{file}" class="yth-caidanbj-clor">
              
              <span class="el-upload-list__item-preview">
                <span class="el-upload-list__item-preview" @click= "handlePictureCardpreview(file)">
                  <img class="el-upload-list__item-thumbnail" :src= "file.url">
                </span>
              </span>
            </div>
          </el-upload>
          <el-dialog :visible.sync= "dialogVisible">
            <img width="100%" :src= "dialogImageUrl" >
          </el-dialog>
        </div>
        <div class="yth-yizhengm">
          <div class="yth-yzm">验证码:</div>
          <input style="width:200px; height:42px; margin-left:20px;" class="input1" v-model="textarea"/>
        </div>
        <div class="yth-cuangj">
          <el-button type="warning" @click= "open">提交</el-button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false
    };
  },
  mounted: {
    handlePictureCardpreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/assets/css/public.less";
.yth-ccuangj{
  .size(1000px, 100%);
  margin: 0 auto;
  margin-top: 85px
}
.yth-cuangj {
  .size(690px, 100%);
  margin: 0 auto;
  .margin(20px, 0, 20px, 20px);
  .font-size(18px);
  color:#000;
  /deep/.yth-cuangj-input textarea {
    .margin(20px, 0, 0, 0);
    .size(690px, 42px);
    .padding(0, 0, 0, 20px);
    line-height: 42px;
    .font-size(15px);
  };
  /deep/.yth-cuangj-shuru textarea {
    .margin(20px, 0, 0, 0);
    .padding(20px, 0, 0, 20px);
    .size(690px, 170px);
    .font-size(15px);
  }
  .yth-tijia {
    .font-size(12px);
  }
  .el-button {
    .margin(20px, 0, 0, 0);
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
.yth-caidanbj-tu{
  .font-size(80px);
  margin-top: 40px;
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
