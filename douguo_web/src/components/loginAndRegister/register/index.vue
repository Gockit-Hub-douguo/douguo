<template>
<div>
    <!-- 登录头部 -->
    <div class="login">
        <div class="login-logo">
            <div class="logoBox">
            </div>
        </div>
    </div>
    <!-- 登录内容 -->
    <div class="loginCont">
        <div class="register">
            <div class="regTop">
                <span class="fl" style="margin-left: 30px;">新用户注册</span>
                <span class="fr have">已有账号, <router-link to="/login">直接登录 ></router-link></span>
            </div>
           <div class="reform">
                <reform></reform>
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
import reform from './form'
export default {
  components: {
    reform
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
    .register{
        .size(940px,auto);
        margin: 0 auto;
        background: #ffffff;
        .regTop{
            font-size: 18px;
            .size(100%,58px);
            line-height: 58px;
            border-bottom: 1px solid #f8f8f7;
            .have{
                font-size: 16px;
                a{
                    color: #3ea000;
                    &:hover{
                        border-bottom:1px solid #3ea000 ;
                        cursor: pointer;
                    }
                }
            }
        }
        .reform{
            padding: 30px;
            text-align: center;
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
