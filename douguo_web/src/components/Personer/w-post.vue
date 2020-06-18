<template>
    <div value="密码验证">
        <div class="email-post">
            <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
                <el-form-item label="账号">
                    <el-input class="email-input" v-model="formLabelAlign.name" placeholder="请输入注册时手机号"></el-input>
                </el-form-item>
                <el-form-item label="验证码">
                    <slide-verify :l="42"
                        :r="10"
                        :w="310"
                        :h="155"
                        @success="onSuccess"
                        @fail="onFail"
                        @refresh="onRefresh"
                        :slider-text="text"
                    ></slide-verify>
                    <div>{{msg}}</div>
                </el-form-item>
                <el-form-item label="新密码" style="margin-top:30px">
                    <el-input class="email-input" placeholder="请输入密码" v-model="formLabelAlign.input" show-password></el-input>
                </el-form-item>
            </el-form>
                <button class="email-button">确定</button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        origin: '',
        input: ''
      },
      msg: '',
      text: '向右滑'
    }
  },
  methods: {
    onSuccess () {
      this.msg = '验证成功'
    },
    onFail () {
      this.msg = '验证失败'
    },
    onRefresh () {
      this.msg = ''
    }
  }
}
</script>

<style lang="less" scoped>
.email-input {
    width: 433px;
    height: 38px;
}
.email-button {
    width: 168px;
    height: 42px;
    line-height: 18px;
    margin-top: 40px;
    margin-left: 84px;
    background: #ffb31a;
    color: #fff;
    font-size: 16px;
    border: 0;
    &:focus {
         outline: none;
        border-color: transparent;
    }
}
</style>
