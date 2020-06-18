<template>
    <div class="main-content">
        <div class="content-left">
            <div class="content-title">
                <div class="content-head">
                    <a class="active">基本资料</a>
                    <a>密码修改</a>
                </div>
                <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                   <el-form-item label="昵称" prop="name">
                     <el-input class="w-lable" v-model="ruleForm.name" value="前端小白"></el-input>
                   </el-form-item>
                    <el-form-item label="性别" prop="sex">
                        <el-radio v-model="ruleForm.radio" label="1">男</el-radio>
                        <el-radio v-model="ruleForm.radio" label="2">女</el-radio>
                   </el-form-item>
                   <el-form-item label="生日" prop="timeget">
                        <el-date-picker
                            v-model="ruleForm.time"
                            type="date"
                            placeholder="选择日期">
                       </el-date-picker>
                     </el-form-item>
                     <el-form-item label= "地址">
                         <el-select v-model="ruleForm.value"  placeholder="请选择">
                            <!-- <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option> -->
                         </el-select>
                         <el-select class="address" v-model="ruleForm.value"  placeholder="请选择">
                            <!-- <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option> -->
                         </el-select>
                    </el-form-item>
                    <el-form-item label= "口味">
                         <el-select v-model="ruleForm.value"  placeholder="请选择">
                            <!-- <el-option
                            v-for="item in options"
                            :key="item.value">
                            </el-option> -->
                         </el-select>
                    </el-form-item>
                    <el-form-item label= "自我介绍">
                        <el-input class="text-title" v-model="ruleForm.aaa"
                         placeholder="介绍下自己，填写你认为自己称得上美食达人的理由。"
                            @input="changes($event)">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                     <el-button type="warning">保存</el-button>
                     </el-form-item>
                </el-form>
            </div>
        </div>
        <!-- 右边头像 -->
        <div class="content-right">
            <div class="content-img">
                <div><img src="https://tx1.douguo.com/upload/photo/4/9/4/70_4907e51a2d5676bcd89d7b738cedcbb4.jpg"/></div>
                <div class="upload-img">更换头像</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        sex: '1',
        time: '',
        aaa: '1'
      }
    }
  },
  methods: {
    changes (e) {
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="less" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.main-content {
    width: 1000px;
    margin: 0 auto;
    overflow: hidden;
}
.content-left {
    width: 690px;
    float: left;
}
.content-title {
    margin-bottom: 25px;
    margin-top: 11px;
}
.content-head {
    font-size: 14px;
    text-align: center;
    width: auto;
    display: inline-block;
}
.content-head a.active {
    border-bottom: 2px solid #383830;
    font-weight: bold;
    color: #383830;
}
.content-head a {
    display: inline-block;
    float: left;
    color: #383830;
    height: 42px;
    line-height: 42px;
    margin-right: 30px;
}
.w-lable {
    width: 433px;
}
.address {
    margin-left: 10px;
}
/deep/ .text-title input{
    width: 594px;
    height: 269px;
    line-height: 30px;
    padding: 6px 13px;
    font-size: 15px;
}
//右边头像
.content-right {
    float: right;
}
.content-img {
    width: 250px;
    img {
        margin-top: 75px;
        margin-right: 200px;
        width: 120px;
        height: 120px;
        border-radius: 100%;
    }
}
.upload-img {
        width: 120px;
        height: 34px;
        border: 1px solid #ffb31a;
        text-align: center;
        color: #ffb31a;
        line-height: 34px;
        font-size: 15px;
        margin-top: 10px;
    }
</style>
