<template>
  <div class="yth-fabu">
    <div class="yth-app">
      <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/">
        <i class="el-icon-plus avatar-uploader-icon yth-top-tu"></i>
        <div>添加菜谱成品图</div>
        <div>(建议尺寸1380*1024，支持上传图片格式jpg, jpeg, png, gif, webp)</div>
      </el-upload>
      <input class="input" placeholder="菜谱名称"/>
      <div class="yth-select">
          <el-select v-model="value1" placeholder="烹饪难度">
              <el-option v-for="item in options" :key="item.value" :label="item.label1" :value="item.value"></el-option>
          </el-select>
          <el-select v-model="value2" style="margin-left: 20px" placeholder="烹饪时间">
              <el-option v-for="item in options" :key="item.value" :label="item.label2" :value="item.value"></el-option>
          </el-select>
      </div>
      <div>
          <el-input class="yth-input" type="textarea" :rows="2" placeholder="这道菜背后的故事 ~~ (选填)" v-model="textarea"></el-input>
      </div>
      <div class="yth-qingdan">食材清单
          <div class="yth-fenlei">
            <div class="yth-shicai">食材</div>
            <div class="yth-yongliang">用量</div>
            <div >
              <input class="input" placeholder="如:五花肉"/>
              <input class="input1" placeholder="如: 250g"/>
              <ul class=" yth-tubiao">
                <li @click='i++' class="el-icon-plus yth-tubiao-a"></li>
                <li class="el-icon-top yth-tubiao-a"></li>
                <li class="el-icon-bottom yth-tubiao-a"></li>
                <li class="el-icon-minus yth-tubiao-b" @click="i--"></li>
              </ul>
            </div>
            <div v-for="item in i" :key="item">
              <input class="input" />
              <input class="input1"/>
              <ul class=" yth-tubiao">
                <li @click='i++' class="el-icon-plus yth-tubiao-a"></li>
                <li class="el-icon-top yth-tubiao-a"></li>
                <li class="el-icon-bottom yth-tubiao-a"></li>
                <li class="el-icon-minus yth-tubiao-b" @click="i--"></li>
              </ul>
            </div>
          </div>
          <div @click='i++' class="yth-zenjia">增加一栏</div>
      </div>
      <div class="yth-qingdan-a">步骤
          <span class="yth-buzhou">（支持上传图片格式有jpg、jpeg、png、gif、webp）</span>
      </div>
      <div class=" yth-qingdan-a">
          <el-button size="small" type="primary " style="line-height:0" class="yth-shangchuan yth-qingdan">批量上传</el-button>
          <span class="yth-buzhou">按住Ctrl键可多选，为保证您的使用体验，请单次上传图片不要超过6张</span>
      </div>
        <div  v-for="item in j" :key="item" style="width:690px; overflow: hidden; ">
          <div class="yth-buzou">
            <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/">
              <i class="el-icon-plus avatar-uploader-icon yth-buzou-tu"></i>
              <div>添加步骤图</div>
            </el-upload>
          </div>
          <el-input class="yth-buzou-shuru" type="textarea" v-model="textarea"></el-input>
          <div class="el-icon-top yth-buzou-a"></div>
          <div class="el-icon-bottom yth-buzou-b"></div>
          <div  @click='j++' class="el-icon-plus yth-buzou-c"></div>
          <div class="el-icon-minus yth-buzou-d"  @click='j--'></div>
        </div>
      <div  @click='j++' class="yth-zj">增加一栏</div>
      <div class="yth-xts">
        <div style="margin-top:20px; margin-bottom:20px">小贴士</div>
        <el-input class="yth-xts-shuru" type="textarea" v-model="textarea"></el-input>
        <el-checkbox class="yth-xts-du" v-model="checked">独家菜谱(次菜谱仅在豆果美食发布)</el-checkbox>
        <div class="yth-hengx"></div>
      </div>
      <div class="yth-cuangj">
            <el-button type="warning">上传视频</el-button>
        </div>
        <div class="yth-yizhengm">
          <div class="yth-yzm">验证码:</div>
          <input style="width:200px; height:42px; margin-left:20px;" class="input1"/>
        </div>
        <div class="yth-cuangj">
          <el-button type="warning" @click="open">发布</el-button>
          <el-button @click="open1" class="yth-cuncg" type="warning">存草稿</el-button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      i: 1,
      j: 1,
      options: [{
        value: '选项1',
        label1: '烹饪难度',
        label2: '烹饪时间'
      }, {
        value: '选项2',
        label1: '切墩(初级)',
        label2: '10分钟左右'
      }, {
        value: '选项3',
        label1: '配菜(中级)',
        label2: '20分钟'
      }, {
        value: '选项4',
        label1: '掌勺(高级)',
        label2: '30分钟'
      }, {
        label2: '1小时以上'
      }],
      value1: [],
      value2: [],
      checked: true
    }
  },
  methods: {
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    open () {
      this.$message('请选择封面')
    },
    open1 () {
      this.$message('保存成功')
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/assets/css/public.less";
.yth-fabu {
  .size(1000px, 100%);
  margin: 0 auto;
  margin-top: 85px;
  .yth-app {
    margin: 0 auto;
    .margin(0, 0, 0, 20px);
  }
  .avatar-uploader {
    .size(690px, 390px);
    background: #eee;
    .margin(20px, 0, 0, 0);
    padding-top: 160px;
    text-align: center;
    color:#999;
    .yth-top-tu{
     .font-size(80px);
    }
  }
  .input {
    .margin(20px, 0, 0, 0);
    .padding(0, 0, 0, 20px);
    .size(690px, 42px);
  }
  .yth-select {
    overflow: hidden;
    .el-select {
      color: #000;
      .margin(20px, 0, 0, 0);
      .padding(0, 0, 0, 20px);
      float: left;
    }
  }
  .el-textarea {
    .margin(20px, 0, 0, 0);
    .size(690px, 100%)
  }
}
/deep/ .yth-input textarea {
    .size(690px, 170px);
}
.yth-qingdan {
  border-top:1px solid #ccc;
  .padding(20px, 0, 20px, 0);
  .font-size(20px);
  .size(690px, 100%);
  .margin(20px, 0, 0, 0) ;
  color:#000;
}
.yth-qingdan-a{
  .font-size(20px);
  .size(690px, 100%);
  color:#000;
}
.yth-fenlei {
  background: #F1F7FA;
  .size(690px, 100%);
  .margin(20px, 0, 20px, 0) ;
  .padding(0, 0, 20px, 10px);
  overflow: hidden;
}
.yth-shicai{
  float:left;
  font-size:15px;
}
.yth-yongliang{
  .margin(0, 0, 0, 320px);
  font-size:15px;
}
.yth-tubiao{
  float:right;
  .margin(30px, 10px, 0, 0);
}
.yth-tubiao-a {
  .size(25px, 25px);
  text-align: center;
  line-height: 25px;
  border-radius: 50%;
  background:gold;
  margin-left: 10px;
  color:#ffffff;
}
.yth-tubiao-b{
  .size(25px, 25px);
  text-align: center;
  line-height: 25px;
  border-radius: 50%;
  background:red;
  margin-left: 10px;
  color:#ffffff;
}
.yth-qingdan .input {
   .size(300px, 40px);
}
.yth-qingdan .input1 {
  .margin(20px, 0, 0, 20px);
  .padding(0, 0, 0, 20px);
  .size(200px, 40px);
}
.yth-zenjia {
    .margin(20px, 0, 0, 0);
    .padding(0, 0, 20px, 0);
    border-bottom: 1px solid #ccc;
}
.yth-buzhou {
  .font-size(12px);
}
.yth-buzou-tu{
  .font-size(80px);
  margin-top: 40px;
}
.yth-shangchuan {
  .size(100px, 30px);
  background: goldenrod;
  border-radius: 5px;
  .margin(0, 0, 0, 0) ;
  border-bottom:0;
}
.yth-buzou{
  .size(200px, 200px)
}
/deep/ .yth-buzou .avatar-uploader{
    .size(200px, 200px);
    .padding(0, 20px);
    .margin( 20px);
    border-radius: 8px;
}
.zou-shuru {
  .margin(0);
  .size(0, 0);
}
/deep/.yth-buzou-shuru textarea {
    .size(400px, 200px);
    .margin(-220px, 0, 0, 220px)
}
.yth-buzou-a {
  .margin(-180px, 30px, 0, 0);
  .size(30px, 30px);
  background: goldenrod;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  float:right;
  color:#ffffff;
}
.yth-buzou-b {
  .margin(-140px, 30px, 0, 0);
  .size(30px, 30px);
  background: goldenrod;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  float:right;
  color:#ffffff;
}
.yth-buzou-c{
  .margin(-100px, 30px, 0, 0);
  .size(30px, 30px);
  background: goldenrod;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  float:right;
  color:#ffffff;
}
.yth-buzou-d{
  .margin(-60px, 30px, 0, 0);
  .size(30px, 30px);
  background: red;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  float:right;
  color:#ffffff;
}
.yth-zj{
  .font-size(16px);
  color:darkblue;
  .margin(20px, 0, 0, 0);
  border-bottom: 1px solid #cccccc;
  .size(690px, 100%);
  .padding(0, 0, 20px, 0);
}
.yth-xts {
  .font-size(20px);
  .margin(20px, 0, 0, 0);
  border-bottom:0;
}
/deep/.yth-xts-shuru textarea {
  .size(690px, 170px);
  .padding(0, 0, 20px, 0);
}
.yth-xts-shuru {
  .margin(0, 0, 20px, 0);
}
.el-textarea{
  .padding(0);
}
/deep/.yth-xts-du{
  .margin(20px, 0, 0, 0);
  .size(690px, 100%);
}
.yth-hengx{
  .margin(20px, 0, 0, 0);
  border-top:1px solid #cccccc;
  .size(690px, 100%);
}
.el-button {
  .margin(10px, 0, 0, 0);
  .size(168px, 42px);
  background: #FFB31A;
  color:#fff;
  .border-radius(5px);
  .font-size(18px);
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
.yth-yizhengm-input {
  //  border-bottom:0;
   .margin(0);
}
/deep/.yth-yizhengm-input textarea {
  .margin(0, 0, 0, 20px);
  .size(200px, 42px);
  float: left;
}
.yth-cuncg {
  .size(168px, 42px);
  .margin(30px, 0, 20px, 20px);
  background: #ffffff;
  color: #FFB31A;
  border:1px solid #FFB31A;
}
</style>
