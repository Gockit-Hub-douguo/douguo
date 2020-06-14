<template>
    <div class="lym-footer">
        <div class="lym-footer-top">
            <div class="lym-footer-topCont">
                <div class="lym-logo2">
                    <img src="https://cp1.douguo.com//static/nweb/images/logo3.png?20191218" alt="">
                </div>
                <div class="lym-datainfo">
                    <p>
                        <span>500万+</span>美食菜谱;
                        <span>2000万+</span>互动内容;
                        <span>3000万+</span>美食课堂;
                        <span>5000万+</span>用户每天都有新分享
                    </p>
                </div>
                <div class="lym-threbl">
                    <h3>扫二维码，下载豆果手机应用：</h3>
                    <ul>
                        <li>
                            <a class="lym-erweima">
                                <img width="92px" height="92px" src="https://cp1.douguo.com//static/nweb/images/qrcode.png?2001" alt="">
                            </a>
                            豆果美食
                        </li>
                        <li>
                            <a class="lym-erweima">
                                <img width="92px" height="92px" src="https://cp1.douguo.com//static/nweb/images/xcx.jpg?2001" alt="">
                            </a>
                            微信扫一扫
                        </li>
                        <li>
                            <a class="lym-erweima">
                                <img width="92px" height="92px" src="https://i1.douguo.com//upload/banner/1578991488.png" alt="">
                            </a>
                            豆果公众号
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="lym-foot">
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
                <p>互联网药品信息服务资格证书</p>
                <p>
                   <img src="https://i1.douguo.com//upload/banner/1522057799.png" alt=""> <a href="">京网文【2017】6954-770号</a> 食品流通许可证SP1101061510252413
                </p>
                <P>广播电视节目制作经营许可证（京）字第11624号</P>
            </div>
            <div class="lym-botfans">
                <div class="lym-weibofans">
                    <span><i></i>加关注</span>
                </div>
                <span>
                    <a href="">
                        <img src="https://i1.douguo.com/upload/banner/1528470330.png" alt="">
                    </a>
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
@import '~css/public.less';
    .lym-footer{
        overflow: hidden;
        .size(100%,auto);
        .center(text-x);
        margin-top: 30px;
        background: #f8f8f8;
        .lym-footer-top{
            background: #f2f2f2;
            .lym-footer-topCont{
                .size(1000px,188px);
                position: relative;
                margin: 0 auto;
                .padding(94px,0,0,0);
                .lym-logo2{
                    .size(147px,auto);
                    position: absolute;
                    left: 0;
                    top: 35px;
                    img{
                        max-width: 100%;
                        max-height: 100%;
                    }
                }
                .lym-datainfo{
                    .size(690px,auto);
                    p{
                        color: #999;
                        line-height: 160%;
                        margin-top: 10px;
                    }
                    span{
                        font-family: Georgia,"Times New Roman",Times,serif;
                        font-size: 24px;
                        color: #84b92c;
                        line-height: 160%;
                    }
                }
                .lym-threbl{
                    .size(312px,auto);
                    position: absolute;
                    right: 0;
                    top: 16px;
                    h3{
                        margin-bottom: 8px;
                    }
                    li{
                        width: 92px;
                        float: left;
                        margin-right: 12px;
                        .center(text-x);
                        .lym-erweima{
                            .size(92px,92px);
                            display: block;
                            margin-bottom: 8px;
                        }
                    }
                }
            }
        }
        .lym-foot{
            .size(1000px,auto);
            margin: 0 auto;
            padding-top: 18px;
            .lym-foot-click{
                .font-size(12px);
                .size(100%,auto);
                float: left;
                .center(text-x);
                .margin(15px,0,15px,0);
                a:hover{
                    color: @font-maincolor;
                    .cursor();
                }
            }
            .lym-footContone{
                p{
                    margin-top: 5px;
                    img{
                        height: 20px;
                    }
                }
            }
            .lym-botfans{
                padding: 15px 0 20px 0;
                .lym-weibofans{
                    .size(61px,22px);
                    .font-size(12px);
                        background: rgba(178,34,34);
                        line-height: 22px;
                        display: inline-block;
                        margin-right: 10px;
                        color: @colorfff;
                        border-radius: 3px;
                        &:hover{
                            .cursor();
                        }
                }
                span{
                    img{
                        height: 22px;
                    }
                }
            }
        }
    }
</style>
