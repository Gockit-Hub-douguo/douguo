<template>
    <div class="main-content">
        <div class="content-left">
            <div class="content-title">
                <div class="content-head">
                    <a class="active">基本资料</a>
                    <router-link to="/person">密码修改</router-link>
                </div>
                <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                   <el-form-item label="手机号">
                     <span ref="text" id="text">{{getphone}}</span>
                   </el-form-item>
                   <el-form-item label="昵称">
                     <el-input class="w-lable" v-model="ruleForm.username" value="前端小白"></el-input>
                   </el-form-item>
                    <el-form-item label="性别">
                        <el-radio v-model="ruleForm.userSex" label="1">男</el-radio>
                        <el-radio v-model="ruleForm.userSex" label="2">女</el-radio>
                   </el-form-item>
                   <el-form-item label="生日">
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
                    </el-form-item>
                    <el-form-item label= "口味">
                         <el-select v-model="ruleForm.myfav"  placeholder="请选择">
                            <el-option
                            v-for="(ite,index) in list"
                            :key="index"
                            :label="ite.label"
                            :value="ite.value">
                            </el-option>
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
                <div><img :src="ruleForm.userphoto"/></div>
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
    //   console.log(this.$store.state.phone)
    console.log(this.$store.state.ulist)
    return {
        list: ['微辣','中辣','麻辣','甜'],
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
        userphoto: 'http://image.yy.com/yywebalbumbs2bucket/144152f8680f421599233c6ffcfcef49_1476265267104.jpeg',
        username: '',
        userSex: '',
        addr: '',
        birthday: '',
        decorations: '',
        myfav: ''
      }
    }
  },
  created(){
      this.$store.dispatch('getsession')
      this.ruleForm.phonenumber = this.$store.state.phone
      this.ruleForm.addr = this.$store.state.ulist.addr
      this.ruleForm.birthday = this.$store.state.ulist.birthday
      this.ruleForm.decorations = this.$store.state.ulist.decorations
      this.ruleForm.myfav = this.$store.state.ulist.myfav
      this.ruleForm.phonenumber = this.$store.state.ulist.phonenumber
      this.ruleForm.userphoto = this.$store.state.ulist.userphoto
      this.ruleForm.username = this.$store.state.ulist.username
  },
  computed: {
     getphone(){
          return this.$store.state.phone
     }
  },
  methods: {
    changes (e) {
      this.$forceUpdate()
    },
    handleAvatarSuccess(file){
        console.log(file)
        this.ruleForm.userphoto = file.imgurl
        // console.log(this.ruleForm)
    },
    update(){
        console.log(this.$refs.text.innerHTML)
        userupload({
            data: {
                phonenumber: this.$refs.text.innerHTML,
                userphoto: this.ruleForm.userphoto,
                username: this.ruleForm.username,
                userSex: this.ruleForm.userSex,
                addr: this.ruleForm.addr,
                birthday: this.ruleForm.birthday,
                decorations: this.ruleForm.decorations,
                myfav: this.ruleForm.myfav
            }
        }).then((dats)=>{
            console.log(dats)
            if(dats.data.status === 0){
                alert('修改成功')
                this.$store.dispatch('getsession')
            }else{
                alert('修改失败')
                this.$store.dispatch('getsession')
            }
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
