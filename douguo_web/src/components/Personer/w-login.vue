<template>
    <div class="main-content">
        <div class="content-left">
            <div class="content-title">
                <div class="content-head">
                    <a class="active">基本资料</a>
                    <router-link to="/person">密码修改</router-link>
                </div>
                <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                   <el-form-item label="昵称" prop="username">
                     <el-input class="w-lable" v-model="ruleForm.username" value="前端小白"></el-input>
                   </el-form-item>
                    <el-form-item label="性别" prop="ruleForm.userSex">
                        <el-radio v-model="ruleForm.userSex" label="1">男</el-radio>
                        <el-radio v-model="ruleForm.userSex" label="2">女</el-radio>
                   </el-form-item>
                   <el-form-item label="生日" prop="ruleForm.birthday">
                        <el-date-picker
                            v-model="ruleForm.birthday"
                            type="date"
                            placeholder="选择日期">
                       </el-date-picker>
                     </el-form-item>
                     <el-form-item label= "地址">
                         <el-select v-model="ruleForm.addr"  placeholder="请选择">
                            <el-option
                            v-for="(item,index) in options"
                            :key="index"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
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
                         <el-select v-model="ruleForm.myfav"  placeholder="请选择">
                            <!-- <el-option
                            v-for="item in options"
                            :key="item.value">
                            </el-option> -->
                         </el-select>
                    </el-form-item>
                    <el-form-item label= "自我介绍">
                        <el-input class="text-title" v-model="ruleForm.decorations"
                         placeholder="介绍下自己，填写你认为自己称得上美食达人的理由。"
                            @input="changes($event)">
                        </el-input>
                    </el-form-item>
                    <el-form-item>
                     <el-button type="warning" @click="update">保存</el-button>
                     </el-form-item>
                </el-form>
            </div>
        </div>
        <!-- 右边头像 -->
        <div class="content-right">
            <div class="content-img">
                <div><img :src="ruleForm.imgurl"/></div>
                <!-- <div class="upload-img">更换头像</div> -->
                <el-upload
                    class="avatar-uploader"
                    action="api/upload"
                    :show-file-list="false"
                    :auto-upload="true"
                    :on-success="handleAvatarSuccess">
                    <div class="upload-img">更换头像</div>
                </el-upload>
            </div>
        </div>
    </div>
</template>

<script>
import { userupload } from 'ax/regiest'
export default {
  data () {
    return {
      options: [
          {
              value: '重庆'
          },
          {
              value: '四川'
          },
          {
              value: '湖北'
          },
          {
              value: '湖南'
          },
          {
              value: '陕西'
          },
          {
              value: '贵州'
          }
        ],
      ruleForm: {
        username: '',
        userSex: '',
        addr: '',
        birthday: '',
        decorations: '',
        imgurl: 'http://image.yy.com/yywebalbumbs2bucket/144152f8680f421599233c6ffcfcef49_1476265267104.jpeg'
      }
    }
  },
  methods: {
    changes (e) {
      this.$forceUpdate()
    },
    handleAvatarSuccess(file){
        this.ruleForm.imgurl = file.imgurl
        console.log(this.ruleForm)
    },
    update(){
        userupload({
            data: this.ruleForm
        }).then((data)=>{
            console.log(data)
        }).catch((err)=>{
            console.log(err)
        })
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
    padding-top: 60px;
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
