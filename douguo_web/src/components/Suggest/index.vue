<template>
    <div>
        <div class="suggest-main">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="公司简介" name="first">
                    <div><img src="https://i1.douguo.com//static/img/about/about.png"/></div>
                    <div class="suggest-text">
                        <h3>关于家的味道，日子的温度</h3>
                        <p class="te-top">中国人总是通过一口热菜，一碗热饭来感知。</p>
                        <p>中国人的餐桌，是世界上最有创意和灵感的盛宴，
                            只要恣意想象，随性而动，简单的食材就能幻化神奇。
                        </p>
                        <p>中国人的饮食文化，博大精深源远流长，任何人穷尽一生，恐也难领会全部所有的要诀和精髓。</p>
                    </div>
                    <div class="sugges-img">
                        <img src="https://i1.douguo.com//static/img/about/intro_pic1.png"/>
                    </div>
                    <div class="suggest-text">
                        <h3>展示烹饪技巧、分享经验、提升厨艺</h3>
                        <p class="te-top">在这里，汇聚了中国人餐桌上所有的灵感创意、文化精髓，</p>
                        <p>或来自于民间最寻常的小智慧小创意，或来自于大厨们毕生所学。。</p>
                        <p>在这里，喜爱美食、热爱生活、享受健康品质生活的你。。</p>
                    </div>
                     <div class="sugges-img">
                        <img src="https://i1.douguo.com//static/img/about/intro_pic2.png"/>
                    </div>
                </el-tab-pane>
                <!-- 团队管理 -->
                <el-tab-pane label="团队管理" name="second">
                    <div>
                        <img src="https://i1.douguo.com//static/img/about/team_pic.png"/>
                    </div>
                    <div class="ceo-inter">
                        <div class="suggest-p">
                            <img src="https://i1.douguo.com//static/img/about/ceo.png"/>
                        </div>
                        <div class="ceo-inter-text">
                            <h3>王宇翔</h3>
                            <p class="ceo-fist">豆果美食创始人&CEO，现任北京豆果信息技术有限公司总裁、
                                中国最大创新创业商圈黑马会副会长等职位
                            </p>
                            <p>
                                2011年，王宇翔选择美食作为切入点创办豆果美食，
                                目前豆果美食已经发展成国内家庭厨房生态领域美食互动社区及交易平台
                                ，App累计下载量超2亿，月活超4000万。
                                在商业化的路上，王宇翔率先提出“厨房经济”的理念并实践取得阶段性成果。
                            </p>
                            <p>
                                作为互联网生活服务的信仰者和实践者，
                                王宇翔坚信互联网将改变人们的生活方式，
                                并致力于生活服务平台的打造。在商业化探索上，
                                豆果美食尝试“工具+社群+电子商务+智能厨电”的商业化布局，集广告、
                                电商和数据输出于一身，以“厨房经济”为战略改变了行业同质化的竞争业态。
                                广告方面，累计收入超千万；电商方面，聚焦在做饭用户真实需要的食材、
                                调味料和厨电等领域，目前已上线商品高达百种；
                                而在数据输出上，豆果美食联合智能厨电厂商延伸产业链条，出货量达预期水平。
                            </p>
                            <ul>
                                <li>个人荣誉:</li>
                                <li>1.2015、2016连续两年入选《Fast Company》中国商业最具创意人物100</li>
                                <li>2.2015年被中国最大创新创业商圈黑马会任命副会长一职</li>
                                <li>3.2015年荣获中关村管委会评选的“2015年中关村高聚工程领军企业家”称号</li>
                            </ul>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="发展历程" name="third">
                    <div><img src="https://i1.douguo.com//static/img/about/dev.png"/></div>
                    <div class="block">
                        <el-timeline>
                            <el-timeline-item
                            v-for="(activity, index) in activities"
                            :key="index"
                            :icon="activity.icon"
                            :type="activity.type"
                            :color="activity.color"
                            :size="activity.size"
                            :timestamp="activity.timestamp">
                            {{activity.content}}
                            </el-timeline-item>
                        </el-timeline>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="豆果荣誉" name="fourth">
                    <div><img src="https://i1.douguo.com//upload/banner/1576745811.jpg"/></div>
                    <div class="rongyu">
                        <ul class="rongyu-img">
                            <li><img src="https://i1.douguo.com//static/img/about/honor_pic1.png" /></li>
                            <li><img src="https://i1.douguo.com//static/img/about/honor_pic2.png"/></li>
                            <li><img src="https://i1.douguo.com//static/img/about/honor_pic3.png" /></li>
                            <li><img  src="https://i1.douguo.com//static/img/about/honor_pic4.png"/></li>
                            <li><img src="https://i1.douguo.com//static/img/about/honor_pic5.png"/></li>
                            <li><img  src="https://i1.douguo.com//static/img/about/honor_pic6.png"/></li>
                        </ul>
                        <div class="rongyu-text">
                            <div class="year">
                                <h3>2018</h3>
                                <p class="ce">ECI Awards营销创新奖</p>
                                <p>2018年度最具创新力企业</p>
                                <p>腾讯飞跃流量奖</p>
                                <p>NBI Awards 2018年度模式影响力企业</p>
                                <p>2018年度电子商务最具品牌价值奖</p>
                            </div>
                        </div>
                         <div class="rongyu-text">
                            <div class="year">
                                <h3>2017</h3>
                                <p class="ce">ECI Awards营销创新奖</p>
                                <p>2018年度最具创新力企业</p>
                                <p>腾讯飞跃流量奖</p>
                                <p>NBI Awards 2018年度模式影响力企业</p>
                                <p>2018年度电子商务最具品牌价值奖</p>
                            </div>
                        </div>
                         <div class="rongyu-text">
                            <div class="year">
                                <h3>2018</h3>
                                <p class="ce">ECI Awards营销创新奖</p>
                                <p>2018年度最具创新力企业</p>
                                <p>腾讯飞跃流量奖</p>
                                <p>NBI Awards 2018年度模式影响力企业</p>
                                <p>2018年度电子商务最具品牌价值奖</p>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="豆果厨房" name="five">
                    <div :key="item" v-for="item in 4"><img src="https://i1.douguo.com//static/img/about/kitchen.png"/>
                    <div class="dd-text">
                        <div class="buttion">豆果定位</div>
                        <h4>如今，豆果美食是一家基于优质 <p>菜谱内容的美好生活方式提供商，家庭用户占比达80%</p></h4>
                    </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="合作伙伴" name="six">
                    <div>
                        <img src="https://i1.douguo.com//static/img/about/partner_pic.png"/>
                    </div>
                    <table>
                        <tbody>
                            <tr :key="item1" v-for="item1 in 4">
                                <td><img src="https://i1.douguo.com//static/img/about/partner4.png"/></td>
                                <td><img src="https://i1.douguo.com//static/img/about/partner1.png"/></td>
                                <td><img src="https://i1.douguo.com//static/img/about/partner2.png"/></td>
                                <td><img src="https://i1.douguo.com//static/img/about/partner15.png"/></td>
                            </tr>
                        </tbody>
                    </table>
                </el-tab-pane>
                <el-tab-pane label="加入豆果" name="eight">
                    <div class="jion-guo">
                        <img src="https://i1.douguo.com//upload/banner/1576751173.jpg"/>
                        <div class="mast">
                            <a>社会招聘</a>
                            <a>校园招聘</a>
                            <p>简历投递：hr@douguo.com</p>
                            <p>简历投递：hr@douguo.com</p>
                        </div>
                    </div>
                    <div class="jion-office">
                        <ul class="office-ty">
                            <li>
                            <a ><img src="https://cp1.douguo.com/static/nweb/images/opra.gif"/></a>
                            <a><h3>运营类</h3></a>
                            <p>6个当前职位</p>
                            </li>
                            <li>
                            <a ><img src="https://cp1.douguo.com/static/nweb/images/dev.gif"/></a>
                            <a><h3>研发类</h3></a>
                            <p>11个当前职位</p>
                            </li>
                        </ul>
                        <div id="office">
                            <h3>招聘职位</h3>
                            <span>您已经选：<el-tag :closable= 'true'>全部</el-tag>
                                <el-tag :closable= 'true'>全部分类</el-tag>
                            </span>
                        </div>
                        <div class="office-serc">
                            <span>职位性质：</span>
                            <a id="quan">全部</a>
                            <a>校园招聘</a>
                            <a>社会招聘</a>
                        </div>
                        <div class="office-serc">
                            <span>职位分类：</span>
                            <a id="quan">全部分类</a>
                            <a>运营类</a>
                            <a>研发类</a>
                        </div>
                        <table class="job-tab">
                            <tbody>
                                <tr>
                                    <th>职位名称</th>
                                    <th>所属部门</th>
                                    <th>工作地点</th>
                                    <th>职业性质</th>
                                </tr>
                                <tr :key="i" v-for="i in 10">
                                    <td>ui设计师</td>
                                    <td>研发</td>
                                    <td>北京</td>
                                    <td>全职</td>
                                </tr>
                            </tbody>
                            <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="30" class="text-pag">
                            </el-pagination>
                        </table>
                    </div>
                </el-tab-pane>
                 <el-tab-pane label="联系豆子" name="nine">
                    <div><img src="https://i1.douguo.com//upload/banner/1576658269.png"/></div>
                    <div :key="tt" v-for="tt in 4" class="contc">
                        <h3>北京豆果信息技术有限公司</h3>
                        <p>邮箱：ads#douguo.com（发送邮件时请将#改为@）</p>
                        <p>邮箱：ads#douguo.com（发送邮件时请将#改为@）</p>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
        activities: [{
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: '50px',
          type: 'primary',
          icon: 'el-icon-more'
        },{
          content: '支持使用图标',
          timestamp: '2018-04-12 20:46',
          size: 'large',
          type: 'primary',
          icon: 'el-icon-more'
        }]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style lang="less" scoped>
.suggest-main {
    width: 1000px;
    margin: 0 auto;
    padding-top: 60px;
}
.suggest-type a{
    display: inline-block;
    font-size: 14px;
    text-align: center;
    width: auto;
    margin-top: 30px;
}
h3{
        font-size: 22px;
    }
.suggest-text {
    padding: 42px 0 60px 0;
    text-align: center;
    p {
        color: #a8a8a8;
        line-height: 18px;
    }
    .te-top {
        margin-top:20px ;
    }
}
.sugges-img {
    text-align: center;
}
.ceo-inter {
    padding: 80px 0;
     overflow: hidden;
    .suggest-p {
        float: left;
       
     }
    .ceo-inter-text {
        margin-left: 329px;
        color: #7f7f7f;
        font-size: 14px;
        .ceo-fist {
            font-size: 16px;
            color: #333;
        }
        p {
            margin-top: 20px;
        }
        ul {
            margin-top: 30px;
        }
    }
}
.rongyu-img {
    float: left;
    margin-left: 155px;
}
.rongyu-text {
    margin-left: 111px;
    float: left;
    .year {
        margin-bottom: 72px ;
        h3 {
            color: #8e5814;
        }
        p {
            font-size: 16px;
            color: #a78a5b;
            line-height: 30px;
        }
        .ce {
            margin-top: 20px;
        }
    }
}
.dd-text {
    padding: 46px 0 67px;
    text-align: center;
    .buttion {
    width: 194px;
    height: 40px;
    line-height: 40px;
    background: rgba(255,112,41,1);
    border-radius: 29px;
    text-align: center;
    color: #fff;
    font-size: 22px;
    margin: 0 auto 40px;
    }
    h4 {
    font-size: 18px;
    line-height: 34px;
    font-weight: normal;
    }
}
table {
    margin: 10px auto 50px;
    tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
    }
}
table tr td {
    padding: 20px 10px;
}
.jion-guo {
    position: relative;
    .mast {
    position: absolute;
    width: 335px;
    height: 100%;
    padding-top: 80px;
    right: 0;
    top: 0;
    }
    a {
    display: block;
    width: 138px;
    height: 52px;
    text-align: center;
    line-height: 52px;
    font-size: 17px;
    border-radius: 5px;
    background: #ffffff;
    color: #fc541f;
    margin-bottom: 30px;
    }
    p {
        font-size: 16px;
        color: #ffffff;
       margin-bottom: 30px;
    }
}
.jion-office {
    padding: 50px;
    .office-ty li {
        display: inline-block;
        width: 170px;
        margin-right: 45px;
        img {
            width: 170px;
        }
        h3 {
            font-size: 12px;
        }
    }
}
#office {
    margin-top: 67px;
    border-bottom: 1px solid #000000;
    h3 {
    margin-bottom: 36px;
    }
     span {
         margin-bottom: 30px;
     }
}
.office-serc {
    margin-top: 24px;
    overflow: hidden;
    a {
        padding: 0 20px;
    border-right: 1px solid black;
    }
}
#quan {
    color: #ff2d52;
}
.job-tab {
     width: 100%;
    margin-top: 42px;
    text-align: center;
    th {
    font-size: 16px;
    line-height: 50px;
    background: #e3e3e3;
    }
}
.text-pag {
    margin: 20px auto;
}
.contc {
    text-indent: 308px;
    margin-bottom: 40px;
    h3 {
    color: #444444;
    margin-bottom: 24px;
    margin: 30px 0;
    }
}
</style>
