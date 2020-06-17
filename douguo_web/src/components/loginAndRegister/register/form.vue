<template>
  <div class="reform">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <el-form-item prop="num">
        <el-input  v-model="ruleForm.num" placeholder="请输入电话号码"></el-input>
        <span> 输入常用的手机号，便于登录和找回密码</span>
      </el-form-item>
      <el-form-item prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入昵称"></el-input>
        <span>中英文即可，最多6个字</span>
      </el-form-item>
      <el-form-item  prop="pass">
         <el-input type="password" v-model="ruleForm.pass" autocomplete="off" placeholder="请输入密码"></el-input>
          <span>密码长度为6-20位，不能含有空格</span>
      </el-form-item>
      <el-form-item prop="checkPass">
        <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off" placeholder="确认密码"></el-input>
        <span>再输入一次密码</span>
      </el-form-item>
      <el-form-item>
        <el-input v-model="input" placeholder="输入验证码" class="yzmar"></el-input>
        <el-button type="info" class="fr">获取验证码</el-button>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    // 密码验证
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        // 6-20位包含字符、数字、特殊符号

        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      input: '',
      ruleForm: {
        num: '',
        name: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        num: [
          { type: 'number', require: true, message: '请输入电话号码', trigger: 'change' }
        ],
        name: [
          { require: true, message: '请输入昵称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在3到5个字符之间', trigger: 'blur' }
        ],
        pass: [
          { validator: validatePass, trigger: 'blur' },
          { pattern: /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/, message: '密码为数字，小写字母，大写字母，特殊符号 至少包含三种，长度为 8 - 30位，密码不能包含 用户名，名称 （判断的时候不区分大小写)' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
@import '~css/public.less';
  .reform{
    display: inline-block;
    width: 312px;
    color: #999;
    span{
     line-height: 22px;
      color: #999;
      text-align: left;
      width: 100%;
      padding-top: 5px;
      display: inline-block;
    }
    /deep/ form{
      .center(text-x);
      .el-form-item{
        margin: 0;
      }
    }
    .yzmar{
      display: block;
      /deep/ button{
        .size(132px,34px);
      }
    }
      // display: block;
      /deep/ .yzmar input{
        width: 122px;
        height: 34px;
        float: left;
         margin-top: 5px;
        }
      }
      /deep/ .el-button--primary{
            width: 100%;
          margin-top: 30px;
          background: #ffb31a;
          border-color:#ffb31a ;
          &:active,
          &:hover,
          &:focus{
            background: #ffff;
            border-color: #999;
            color: #000;
          }
      }
      /deep/ .el-form-item__error{
          position: absolute !important;
          top: 12px ;
          left: 270px;
          text-align: left !important;
          width: 135px;
      }
</style>
