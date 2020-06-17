<template>
    <div class="free">
        <div>
            <p class="fl input1">
                <template>
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in cities"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                      <span style="float: left">{{ item.label }}</span>
                      <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                    </el-option>
                  </el-select>
                </template><input class="nmber" name="phone" type="text" placeholder="手机号或者邮箱" v-model="phone"/>
            </p>
            <p class="fl input2">
               <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
            </p>
            <span class="method">
              <a style="margin-left:5px;">登录</a>
            </span>
            <div class="agreement">
              <input type="checkbox" checked="checked">我已阅读并且同意
              <a>豆果美食使用协议</a>
            </div>
        </div>
        <div class="share">
          <span class="fl numlogin">社交账号登录</span>
          <div class="shareicon">
            <a>
              <span class="wxicon">
                <img src="https://passport.douguo.com/public/img/web/wx.png" alt="">
              </span>微信
            </a>
           <a>
              <span class="wxicon">
                <img src="https://passport.douguo.com/public/img/web/qq.png" alt="">
              </span>QQ
            </a>
           <a>
              <span class="wxicon">
                <img src="https://passport.douguo.com/public/img/web/weibo.png" alt="">
              </span>微博
            </a>
          </div>
        </div>
    </div>
</template>
<script>
// import Axios from 'axios'
export default {
  data () {
    return {
      value: '',
      input: '',
      disabled: false,
      time: 0,
      btntxt: '获取验证码',
      phone: '',
      formMess: {
        email: this.email,
        phone: this.phone
      },
      // 电话号码分组
      options: [
        {
          value: '中国',
          num: '+86'
        },
        {
          value: '中国',
          num: '+86'
        },
        {
          value: '中国',
          num: '+86'
        },
        {
          value: '中国',
          num: '+86'
        }
      ],
      cities: [
        { value: '中国', label: '+86' },
        { value: '美国', label: '+1' },
        { value: '加拿大', label: '+1' },
        { value: '安圭拉岛', label: '+1264' },
        { value: '安提瓜和巴布达', label: '+1268' },
        { value: '巴哈马', label: '+1242' },
        { value: '巴巴多斯', label: '+1246' },
        { value: '百慕大', label: '+1441' },
        { value: '百慕大1', label: '+1441' },
        { value: '百慕大2', label: '+1441' },
        { value: '百慕大3', label: '+1441' },
        { value: '百慕大4', label: '+1441' },
        { value: '百慕大5', label: '+1441' },
        { value: '百慕大6', label: '+1441' },
        { value: '百慕大7', label: '+1441' },
        { value: '百慕大8', label: '+1441' }
      ],
      // 电话号码前缀
      restaurants: [],
      state: ''
    }
  },
  mounted: function () {
  },
  methods: {
    // 验证手机号码部分
    sendcode () {
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      //   var url = '/nptOfficialWebsite/apply/sendSms?mobile =  ' + this.ruleForm.phone
      if (this.phone === '') {
        alert('请输入手机号码')
      } else if (!reg.test(this.phone)) {
        alert('手机格式不正确')
      } else {
        this.time = 60
        this.disabled = true
        this.timer()
      }
    },
    // 邮箱验证
    sendEmail () {
      var regEmail = /^([a-zA-Z0-9] + [_|]?) * [a-zA-Z0-9]+@([a-zA-Z0-9] + [_|]?) * [a-zA-Z0-9] + [a-zA-Z]{2,3}$/
      if (this.email === '') {
        alert('请输入邮箱')
      } else if (!regEmail.test(this.email)) {
        alert('邮箱格式不正确')
      }
    }
    // 各国电话号码前缀
  }
}
</script>

<style lang="less" scoped>
@import '~css/public.less';
  .free{
    .size(350px,auto);
    overflow: hidden;
    float: left;
    .margin(30px,0,0,45px);
    font-family: "Microsoft Yahei", Tahoma, Geneva, sans-serif;
    .input1{
      .size(312px,auto);
      color: #999999;
       font-size: 14px;
      padding: 12px 0;
      position: relative;
      border-bottom: 1px solid #f0f0f0;
      span{
        border: 1px solid #000;
        height: 100%;
      }
      /deep/ input{
            .size(83px,28px);
            padding: 0;
           text-align: left;
           border: none;
           &:active,
           &:hover,
           &:focus{
                 border-color: transparent;
           }
           .el-input__suffix{
             top: 7px;
           }
      }
      .nmber{
            width: 70% !important;
            display: inline-block;
            outline: none;
            border-left: 1px solid #f0f0f0;
            padding-left: 15px;
            &:focus{
              outline: none;
            }
      }
    }
    .input2{
      .size(312px,auto);
      color: #999;
      margin-top: 25px;
      font-size: 14px;
      padding: 15px 0;
      margin-bottom: 15px;
      border-bottom: 1px solid #f0f0f0;
     /deep/ input{
         border: none;
        &:focus{
          outline: none;
        }
      }
    }
    .method{
      width: 312px;
      height: 40px;
      background: #fecd4a;
      color: #141414;
      border-radius: 2px;
      cursor: pointer;
      border-radius: 5px;
      vertical-align: middle;
      text-align: center;
      line-height: 40px;
      font-size: 14px;
      display: inline-block;
      margin-top: 30px;
      a:hover{
        color: #ffffff;
      }
      &:hover{
          color: #000;
          background: #ffffff;
          border: 1px solid  #fecd4a;
      }
    }
    .agreement{
      width: 312px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      padding-bottom: 15px;
      border-bottom: 1px solid #f0f0f0;
    }
    .share{
      width: 312px;
      height: 50px;
      line-height: 40px;
      padding-top: 17px;
      .numlogin{
        font-size: 12px;
        color: #666;
      }
      .shareicon{
        overflow: hidden;
         width: 75%;
         display: inline-block;
        a{
          float: left;
          padding-left: 20px;
          .wxicon{
            .size(24px,24px);
            display: inline-block;
            border-radius: 100%;
             margin-right: 5px;
            img{
              max-width: 100%;
              max-height: 100%;
              float: left;
              margin-top: 10px;
            }
        }
      }
    }
  }
}
</style>
