<template>
    <div class="content">
        <div class="lefty">
            <div class="reatv">
                <div class="banner">
                    <div class="block">
                        <el-carousel height="390px">
                            <el-carousel-item v-for="item in 4" :key="item">
                            <h3 class="small" :style="{background:'url('+xiq.img3+')'}">{{list}}</h3>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>
            <div class="rinfo">
                <h1>{{xiq.name}}</h1>
                <div class="bout-box">
                    <span class="bout">精品</span>
                </div>
                <div class="vcnum">
                    <span>520</span>
                    浏览
                    <span class="span-name">520</span>
                    收藏
                    <div class="operate">
                        <router-link to="" class="btn-collest"><i class="el-icon-star-off"></i> 收藏</router-link>
                    </div>
                </div>
                <div class="aut-info relative">
                    <div class="left">
                        <router-link to="" class="aut-img left">
                            <img :src="xiq.img1" alt="">
                        </router-link>
                        <div class="aut-info1 left">
                            <router-link to="" class="nickname text-lips">食客妈妈</router-link>
                        </div>
                        <!-- <router-link to="" class="gz"> <i class="el-icon-plus"></i> 关注</router-link> -->
                        <btn></btn>
                    </div>
                </div>
                <p class="intro relative">吃惯了赤酱浓油的豆腐脑，在四川乐山有一种魔幻般的豆腐脑的做法，那就是冲蛋豆腐脑！听着挺厉害的名字，其实，超级简单，只要按照我的步鄹，一学就会❗️</p>
            </div>
            <!-- 材料 -->
            <div class="matarial">
                <h2 class="mini-title">冲蛋豆腐脑的用料</h2>
                <table>
                    <tbody>
                        <tr>
                            <td class="lirre">
                                <span class="scname">黄油</span>
                                <span class="scnum right">1杯</span>
                            </td>
                            <td class="lirre">
                                <span class="scname">鸡蛋</span>
                                <span class="scnum right">1个</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="lirre">
                                <span class="scname">红薯淀粉</span>
                                <span class="scnum right">5大勺</span>
                            </td>
                            <td class="lirre">
                                <span class="scname">酱油</span>
                                <span class="scnum right">1大勺</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="lirre">
                                <span class="scname">香醋</span>
                                <span class="scnum right">1勺</span>
                            </td>
                            <td class="lirre">
                                <span class="scname">麻油</span>
                                <span class="scnum right">1勺</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="lirre">
                                <span class="scname">㯙子</span>
                                <span class="scnum right">适量</span>
                            </td>
                            <td class="lirre">
                                <span class="scname">内脂</span>
                                <span class="scnum right">5克</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="lirre">
                                <span class="scname">葱花</span>
                                <span class="scnum right">适量</span>
                            </td>
                            <td class="lirre">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- 步骤 -->
            <div class="step">
                <h2 class="mini-title">冲蛋豆腐脑的做法</h2>
                <div class="stepcont left">
                    <a style="float:left" >
                        <img :src="xiq.img2" alt="">
                    </a>
                    <div class="stepinfo">
                        <p>步骤1</p>
                        将一杯黄豆，加水泡足4个小时以上。天气热轻放到冰箱中泡发！
                    </div>
                </div>
                <div class="stepcont left">
                    <a style="float:left" >
                        <img :src="xiq.img3" alt="">
                    </a>
                    <div class="stepinfo">
                        <p>步骤2</p>
                        将泡好的豆子，放到豆浆机中，选择1200ml，湿豆模式！
                    </div>
                </div>
                <div class="stepcont left">
                    <a style="float:left" >
                        <img :src="xiq.img4" alt="">
                    </a>
                    <div class="stepinfo">
                        <p>步骤3</p>
                        做好的豆浆，放凉到80度，别忘了用滤网过滤。用漏网和纱布过滤都可以，因为豆浆机破壁后，非常细腻了！
                    </div>
                </div>
                <div class="stepcont left">
                    <a style="float:left" >
                        <img :src="xiq.img5" alt="">
                    </a>
                    <div class="stepinfo">
                        <p>步骤4</p>
                        豆浆倒入电饭煲，再倒入内脂，稍微搅拌两三下。电饭煲按保温键，15分钟就可以成型！
                    </div>
                </div>
                <div class="stepcont left">
                    <a style="float:left" >
                        <img :src="xiq.img6" alt="">
                    </a>
                    <div class="stepinfo">
                        <p>步骤5</p>
                        豆浆倒入电饭煲，再倒入内脂，稍微搅拌两三下。电饭煲按保温键，15分钟就可以成型！！
                    </div>
                </div>
                <div class="stepcont left">
                    <a style="float:left" >
                        <img :src="xiq.img7" alt="">
                    </a>
                    <div class="stepinfo">
                        <p>步骤6</p>
                        豆浆倒入电饭煲，再倒入内脂，稍微搅拌两三下。电饭煲按保温键，15分钟就可以成型！
                    </div>
                </div>
                <div class="stepcont left">
                    <a style="float:left" >
                        <img :src="xiq.img8" alt="">
                    </a>
                    <div class="stepinfo">
                        <p>步骤7</p>
                        最后，撒上馓子、葱花，搅拌均匀即可✅！
                    </div>
                </div>
                <div class="stepcont left">
                    <a style="float:left" >
                        <img :src="xiq.img9" alt="">
                    </a>
                    <div class="stepinfo">
                        <p>步骤8</p>
                        冲蛋豆腐脑最早源于四川乐山，清早的小巷中，一碗冲蛋豆腐脑唤醒着这个西南的小镇！
                    </div>
                </div>
            </div>
            <!-- 小贴士 -->
            <div class="tips">
                <h2 class="mini-title">冲蛋豆腐脑的烹饪技巧</h2>
                <p>做菜好吃都有技巧，我的每道菜都有小妙招，大家搜索“豆果”可以直接查看我的菜谱！</p>
            </div>
            <p class="creatime">创建时间:1天前</p>
            <div class="creatime">
                ©本菜谱的做法由 
                <router-link to="">食客祥妈</router-link>
                 编写，未经授权不得转载
            </div>
            <div class="ggw">
                <el-carousel height="200px">
                <el-carousel-item v-for="item in 4" :key="item">
                    <!-- <h3 class="small"><span class="gg-text">广告位招租</span></h3> -->
                    <h3 class="small" :style="{background:'url('+xiq.img10+')'}">{{item.list}}<span class="gg-text">广告位招租</span></h3>
                </el-carousel-item>
                </el-carousel>>
            </div>
            <div class="btn-box"><el-button type="warning"><router-link style="color:#fff" to="/cscp">上传我做的这道菜</router-link></el-button></div>
            <p class="fcc">
                你当前的位置：
                <router-link to="">豆果美食</router-link>
                 > 冲蛋豆腐脑
            </p>
            <!-- 评论 -->
            <div class="comment">
                <div class="comment-text">
                    <h2 class="mini-title">评论</h2>
                    <div class="in-comment">
                        <div class="author-img  left">
                            <img width="30px" :src="xiq.img2" alt="">
                        </div>
                        <div class="right">
                            <el-input
                            style="width:648px"
                            type="textarea"
                            :rows="2"
                            placeholder="请输入内容"
                            v-model="textarea">
                            </el-input>
                        </div>
                        <div class="btn-box right"><el-button type="warning" plain>发表评论</el-button></div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 左边 -->
        <div class="right-box">
            <!-- 广告 -->
            <div class="rgg-box">
                <el-carousel height="260px">
                <el-carousel-item v-for="item in 3" :key="item">
                    <!-- <h3 style="text-align: center" class="small"><span class="gg-text1">广告位招租</span></h3> -->
                    <h3 class="small" :style="{background:'url('+xiq.img5+')'}">{{item.list}}<span class="gg-text"></span></h3>
                </el-carousel-item>
                </el-carousel>
            </div>
            <!-- 热门文章 -->
            <div class="artmod">
                <h2>热门文章-烹饪技巧</h2>
                <div class="hot-art">
                    <router-link to="">
                        <img width="70px" :src="xiq.img10" alt="">
                        <span class="hot-title">年夜饭必备技巧之（禽肉篇）</span>
                    </router-link>
                </div>
                <ul class="art-list">
                    <li><router-link to="">年夜饭必备技巧之（畜肉篇）</router-link></li>
                    <li><router-link to="">年夜饭必备技巧之（蔬菜篇）</router-link></li>
                    <li><router-link to="">年夜饭必备技巧之（鱼肉篇）</router-link></li>
                </ul>
            </div>
            <!-- 被加入的采单 -->
            <div class="addmenu">
                <h2>被加入的菜单 <el-button class="right" size="small">加入采单</el-button></h2>
            </div>
            <div>
                <img width="280px" :src="xiq.img11" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import btn from '@/components/menu/button';
export default {
    created(){
        console.log(this.$route.query.id)
        this.xiq = this.$store.state.spxiang[this.$route.query.id]
    },
    data () {
        return {
            xiq: [],
            dialogImageUrl: '',
            dialogVisible: false,
            textarea: ''
            // list: 'https://cp1.douguo.com/upload/caiku/5/d/a/690x390_5d7d98fc817c55c18f959585ea4e55fa.JPG'
            
        }
    },
    components: {
      btn
    }
}
</script>

<style lang="less" scoped>
//  @import '~privatecss/lj_xq.less';
.content {
    width: 1000px;
    margin: 0 auto;
    margin-top: 80px;
    .lefty {
        width: 690px;
        float: left;
        .reatv {
            position: relative;
            .banner {
                display: block;
                width: 690px;
                height: 390px;
                overflow: hidden;
                border-radius: 8;
            }
        }
        .rinfo {
            margin-top: 20px;
            padding: 9px 0 40px;
            h1 {
                color: #333;
                font-weight: bold;
                line-height: 24px;
                font-size: 22px;
            }
            .bout-box {
                margin-top: 10px;
                span {
                    display: inline-block;
                    margin-right: 16px;
                    font-size: 16px;
                    color: #fff;
                    text-align: center;
                    width: 42px;
                    height: 22px;
                    box-sizing: border-box;
                    line-height: 22px;
                    border-radius: 2px;
                }
                .bout {
                    background: #ffb31a;
                }
            }
            .vcnum {
                font-size: 13px;
                color: #333;
                margin-top: 20px;
                position: relative;
                span {
                    font-size: 24px;
                    color: #ffb31a;
                    position: relative;
                    top: 2px;
                }
                .span-name {
                    margin-left: 40px;
                }
                .operate {
                    right: 0;
                    display: inline-block;
                    top: -3px;
                    position: absolute;
                    .btn-collest {
                        display: inline-block;
                        width: 80px;
                        height: 34px;
                        border-radius: 4px;
                        color: #fff;
                        border: 1px solid #ffb31a;
                        font-size: 15px;
                        text-align: center;
                        line-height: 32px;
                        background: #ffb31a;
                        // padding-left: 20px;
                    }
                }
            }
            .aut-info {
                font-size: 16px;
                color: #666;
                margin: 25px 0;
                .aut-img {
                    img {
                        width: 30px;
                        border-radius: 50%;
                    }
                }
                .aut-info1 {
                    font-size: 16px;
                    color: #666;
                    margin-left: 6px;
                    position: relative;
                    margin-right: 20px;
                    .nickname {
                        font-size: 13px;
                        color: #333;
                        vertical-align: middle;
                    }
                    .text-lips {
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                }
                .gz {
                    float: left;
                    height: 30px;
                    width: 73px;
                    line-height: 28px;
                    text-align: center;
                    color: #333;
                    border-radius: 4px;
                    border: 1px solid #333;
                    font-size: 12px;
                }
            }
            .intro {
                font-size: 15px;
                color: #333;
                line-height: 27px;
                margin-top: 75px;
            }
        }
        .matarial {
            padding-bottom: 40px;
            .mini-title {
                font-size: 18px;
                color: #333;
                line-height: 18px;
                font-weight: bold;
                margin: 30px 0 20px;
            }
            table {
                margin-left: 1px;
                color: #999;
                border-collapse: collapse;
                border-spacing: 0;
                overflow: hidden;
                width: 690px;
                tr {
                    background: #f1f7fa;
                    color: #333;
                    height: 50px;
                    border: 1px solid #e5e5e5;
                    .lirre {
                        width: 343px;
                        border-right: 1px solid #e5e5e5;
                        border-top: 0;
                        .scname {
                            display: inline-block;
                            width: 254px;
                            padding-right: 5px;
                        }
                        span {
                            padding: 0 18px;
                            font-size: 15px;
                        }
                        .scnum {
                            display: inline-block;
                            max-width: 90px;
                            text-align: right;
                            padding-left: 0;
                        }
                    }
                }
            }
        }
        .step {
            .mini-title {
                font-size: 18px;
                color: #333;
                line-height: 18px;
                font-weight: bold;
                margin: 30px 0 20px;
                .stepcont {
                    margin: 25px 0 40px;
                    a {
                        color: #333;
                        text-decoration: none;
                        float: left;
                    }
                }
            }
        }
    }
}
.tips {
    margin-bottom: 40px;
    .mini-title {
        font-size: 18px;
        color: #333;
        line-height: 18px;
        font-weight: bold;
        margin: 30px 0 20px;
        margin-bottom: 30px;
    }
    p {
        font-size: 15px;
        color: #333;
        line-height: 27px;
    }
}
.creatime {
    font-size: 12px;
    color: #999;
}
.creatime {
    font-size: 13px;
    color: #333;
    margin: 10px 0 20px;
    a {
        color: #256DC6;
    }
}
.ggw {
    width: 690px;
    height: 200px;
    background: #999;
    font-size: 80px;
    color: #fff;
    line-height: 200px;
    text-align: center;
}
.btn-box {
    line-height: 80px;
    text-align: center;
}
.fcc {
    font-size: 13px;
    color: #333;
    line-height: 13px;
    padding: 80px 0 10px;
    a {
        color: #333;
    } 
}
.mini-title {
    font-size: 18px;
    color: #333;
    line-height: 18px;
    font-weight: bold;
    margin: 30px 0 20px;
}
.in-comment {
    padding-bottom: 20px;
    position: relative;
    .author-img {
        width: 30px;
        height: 30px;
        margin-right: 12px;
        overflow: hidden;
        img {
            border-radius: 50%;
        }
    }
}
.gg-text {
    font-size: 60px;
    color: #fff;
}
.absolute {
    position: absolute;
}
.relative {
    position: relative;
}
.left {
    float: left;
}
.right {
    float: right;
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    height: 390px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
.stepcont {
    margin: 12px 0 20px;
    // padding-bottom: 20px;
}
.stepinfo {
    float: left;
    padding: 0;
    width: 480px;
    min-height: 200px;
    word-wrap: break-word;
    margin-left: 10px;
    font-size: 15px;
    color: #333;
    line-height: 27px;
    overflow: hidden;
    p {
        font-weight: bold;
    }
}
.right-box {
    width: 280px;
    float: right;
    .rgg-box {
        .gg-text1 {
            font-size: 20px;
            text-align: center;
            line-height: 260px;
            color: #fff;
        }

    }
    .artmod {
        margin-bottom: 22px;
        h2 {
            font-size: 16px;
            color: #333;
            line-height: 16px;
            font-weight: bold;
            margin-top: 20px;
        }
        .hot-art {
            margin-top: 20px;
            .hot-title {
                display: inline-block;
                margin-left: 10px;
                color: #333;
                font-size: 14px;
            }
        }
        .art-list {
            li {
                margin-top: 20px;
                font-size: 13px;
                color: #333;
                line-height: 15px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                a {
                    color: #333;
                }
            }
        }
    }
    .addmenu {
        margin-bottom: 20px;
        h2 {
            font-weight: bold;
            font-size: 16px;
            line-height: 34px;
            padding: 40px 0 5px;
        }
    }
}
</style>