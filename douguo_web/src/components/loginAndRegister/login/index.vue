<template>
<div>
    <!-- 登录头部 -->
    <div class="login">
        <div class="login-logo">
            <div class="logoBox" @click="index(1)">
            </div>
        </div>
    </div>
    <!-- 登录内容 -->
    <div class="loginCont">
        <div class="Content">
            <div class="loginBack fl">
                <div class="bgc"></div>
            </div>
            <!-- 登录框 -->
            <div class="loginInput fl">
                <div id="app">
                    <div class="radio-wrap">
                        <div class="radio-group" :v-model="tabView">
                            <span :key="index"  v-for='(tab ,index) in tabs'
                             @click = "i=index">
                                {{tab.name}}
                            </span>
                        </div>
                        <div style="margin:10px 0;"></div>
                          <free v-if="i == 0"></free>
                          <pasword v-if="i == 1"></pasword>
                    </div>
                </div>
            </div>
        </div>
         <!-- 登录页面底部 -->
        <div class="lym-foot-click">
                <a>关于豆果</a>.
                <a>在豆果工作</a>.
                <a>意见反馈</a>.
                <a>菜谱大全</a>.
        </div>
        <div class="lym-footContone">
            <p>
                <a href="">北京豆果信息技术有限公司</a>
                <span>京ICP证111032号</span>
                <a href="">
                    <img src="https://i1.douguo.com//upload/banner/1564469142.png" alt="">
                    京公网安备 11010502038268号
                </a>
                <span>京ICP备09012748号</span>
            </p>
        </div>
    </div>
</div>
</template>

<script>
import free from './free'
import pasword from './password'
export default {
  name: 'app',
  data () {
    return {
      i: 0,
      hz: '', // 后缀名初始化
      tabView: 'f',
      tabs: [{ name: '免密登录' }, { name: '密码登录' }]
    }
  },
  mounted () {
    this.houzui()
  },
  components: {
    free,
    pasword
  },
  methods: {
    tabChange: function (tab) {
      this.tabView = tab
      console.log(this.tabView)
    },
    // 刷新登录页面隐藏首页的头部底部
    houzui () {
      this.hz = this.$route.path || '/login'
      if (this.hz === '/login') {
        this.$store.commit('clik', 0)
      } else {
        this.$store.commit('clik', 1)
      }
    },
    index () {
      this.$store.commit('clik', 1)
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style lang="less" scoped>
@import '~css/public.less';
.login{
    .size(100%,90px);
    background: @colorfff;
    border-bottom: 1px solid #f3f3f3;
    .login-logo{
        .size(940px,auto);
        margin: 0 auto;
        padding-top: 20px;
        .logoBox{
            .size(180px,54px);
            line-height: 54px;
            overflow: hidden;
            background: url('~img/logo_lo.png') center center no-repeat;
            margin-left: 15px;
        }
    }
}
.loginCont{
    .size(100%,auto);
    background: #f3f3f3;
    padding: 40px 0;
    .Content{
        .size(940px,auto);
        margin: 0 auto;
        background: @colorfff;
        overflow: hidden;
        .loginBack{
            .size(540px,456px);
            background: #f3f3f3;
            .bgc{
                margin-top: 50px;
                background: url('~img/sinin.png') center center no-repeat;
                width: 100%;
                height: 100%;
            }
        }
        .loginInput{
            .size(400px,56px);
            border-bottom: 1px solid #f8f8f7;
            position: relative;
            .radio-group{
                height: 56px;
                line-height: 56px;
                span{
                    font: 18px "Microsoft Yahei", Tahoma, Geneva, sans-serif;
                    color: #141414;
                    height: 25px;
                    line-height: 25px;
                    font-style: normal;
                    font-size: 18px;
                    align-items: center;
                    padding-left: 44px;
                }
            }
        }
    }
    .lym-foot-click{
        .font-size(12px);
        .size(100%,auto);
        float: left;
        .center(text-x);
            margin-top: 70px;
        a:hover{
            color: @font-maincolor;
            .cursor();
        }
    }
    .lym-footContone{
            text-align: center;
        p{
            margin-top: 100px;
            img{
                height: 20px;
            }
        }
    }
}
</style>
