<template>
  <div class="d">
    <div class="Sdetail">
        <div class="detailCont">
            <div class="img">
                <img src="https://www.starbucks.com.cn/images/sumatra-coffee-beans.png" alt="">
            </div>
            <div class="fl text">
                <p style="color: #C2A661;font-size:14px; margin-bottom:10px;">深度烘焙</p>
                <h3 style="font-size:26px; margin-bottom:10px;">星巴克®苏门答腊咖啡豆</h3>
                <p style="font-size:16px">
                    带有强烈的泥土芳香，风味异常集中；醇度厚重而浓郁，苏门答腊咖啡是我们非常畅销的其中一款单品咖啡。
                </p>
                <div class="grades">
                    <ul class="gradesList">
                        <li>
                            <p>烘焙程度：深度烘焙</p>
                            <div class="jindu">
                                <div class="jindugbc jin1"></div>
                            </div>
                        </li>
                        <li>
                            <p>酸度：低</p>
                            <div class="jindu">
                                <div class="jindugbc jin2"></div>
                            </div>
                        </li>
                        <li>
                            <p>醇度：厚重</p>
                            <div class="jindu">
                                <div class="jindugbc jin3"></div>
                            </div>
                        </li>
                    </ul>
                </div>
                <table style="width:100%;">
                    <tbody>
                        <tr class="cd">
                            <td class="bold">产地</td>
                            <td>亚洲/太平洋</td>
                        </tr>
                        <tr class="cd">
                            <td class="bold">加工方法</td>
                            <td>半水洗法</td>
                        </tr>
                        <tr class="cd">
                            <td class="bold">风味</td>
                            <td>泥土芳香、草本般风味</td>
                        </tr>
                        <tr class="cd">
                            <td class="bold">食品搭配建议</td>
                            <td>肉桂，燕麦片，枫糖，黄油，太妃糖。</td>
                        </tr>
                        <tr class="cd">
                            <td class="bold">类似咖啡</td>
                            <td>星巴克®低因祥龙综合咖啡</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="guess">
            <h2>猜你喜欢</h2>
            <ul>
               <li :key="item" v-for="item in list">
                   <a :style= "{background:'url('+item.url+') center/contain no-repeat' }"></a>
                   <span>{{item.title}}</span>
               </li>
            </ul>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        { url: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg', title: '美式咖啡' },
        { url: 'https://www.starbucks.com.cn/images/products/cold-brew-lemon-sour.jpg', title: '美式咖啡' },
        { url: 'https://www.starbucks.com.cn/images/products/caffe-americano.jpg', title: '美式咖啡' },
        { url: 'https://www.starbucks.com.cn/images/products/peach-shrub-fizz.jpg', title: '美式咖啡' }
      ]
    }
  }
}
</script>>

<style lang="less" scoped>
@import '~css/public.less';
.d{
  background: #f7f7f7;
}
.Sdetail{
    .size(1000px,100%);
    overflow: hidden;
    margin: 0 auto;
    .detailCont{
        .size(100%,auto);
        padding: 80px;
        overflow: hidden;
        .img{
            float: left;
            .size(400px,355px);
            margin-top: 220px;
            img{
                max-width: 100%;
                max-height: 100%;
            }
        }
        .text{
            box-sizing: border-box;
            padding: 48px 0px 48px 33px;
            line-height: 28px;
            float: left;
            display: inline-block;
            width: 440px;
            .grades{
                margin-bottom: 24px;
                .gradesList{
                    width: 100%;
                    li{
                        margin: 0 0 24px;
                        p{
                            color: rgba(0, 0, 0, 0.56);
                            margin-bottom: 12px;
                            word-break: normal;
                            font-size: 16px;
                        }
                        .jindu{
                            margin-top: 6px;
                            background: rgba(0, 0, 0, 0.12);
                            border-radius: 24px;
                            width: 100%;
                            .jindugbc{
                                background: #00A862;
                                border-radius: 24px;
                                box-sizing: border-box;
                                color: #FFF;
                                min-height: 6px;
                                font-size: 12px;
                                font-size: 1.2rem;
                                line-height: 1;
                                padding: 4px 0;
                                overflow: hidden;
                                &.jin1{
                                    width: 75%;
                                }
                                &.jin2{
                                    width: 30%;
                                }
                                &.jin3{
                                    width: 49%;
                                }
                            }
                        }
                    }
                }
            }
            tbody{
                display: table-row-group;
                vertical-align: middle;
                border-color: inherit;
                font-size: 16px;
                .cd{
                    border-top: none;
                    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
                    td{
                        padding: 12px 0 12px 12px;
                        font-size: 16px;
                        line-height: 25px;
                       &.bold{
                        font-weight: bold;
                       }
                    }
                }
            }
        }
    }
    .guess{
        padding-bottom: 72px;
        overflow: hidden;
        padding-left: 75px;
        h2{
            font-size: 20px;
            font-weight: bold;
        }
        ul{
            margin-left: -24px;
            margin-right: -24px;
           li{
            width: 232px;
            height: 221px;
            padding: 16px;
            text-align: center;
            float: left;
            margin-right: 10px;
             &:hover{
                color: inherit;
                transform: translate3d(0, -8px, 0);
                transition: .6s;
            }
            &:hover a{
                box-shadow: 0 1px 3px 2px rgba(0, 0, 0,0.23);
            }
             a{
                 width: 150px;
                height: 150px;
                border-radius: 100%;
                margin: 0 auto;
                box-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.1);
                background-repeat: no-repeat;
                background-position: center;
                background-size: contain;
                display: inline-block;
             }
             span{
                 display: block;
                    font-size: 16px;
                    font-weight: bold;
                    margin-top: 14px;
             }
           }
        }
    }
}
</style>
