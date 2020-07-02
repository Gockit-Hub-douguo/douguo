<template>
    <div class="lym-header">
        <div class="lym-header-cont">
            <router-link to="/" class="lym-logo fl">
                <img src="https://cp1.douguo.com/static/nweb/images/logo3.png?20191218">
            </router-link>
            <ul class="lym-header-nav fl inline-block">
                <router-link to="/" class="fl">首页</router-link>
                <li>
                    <router-link to="/jx" class="lym-caipu">菜谱 <i class="el-icon-arrow-down"></i></router-link>
                    <div class="lym-menu">
                        <div class="lym-menu-nav">
                            <router-link to="/jx"><img src="https://cp1.douguo.com/static/nweb/images/jx3.png"><span>精选</span></router-link>
                            <router-link to="Caipu"><img src="https://i1.douguo.com/upload/banner/1585648022.png" alt=""> <span>最新</span></router-link>
                            <router-link to="caidanzxzr"><img src="https://cp1.douguo.com/static/nweb/images/menu3.png" alt=""> <span>菜单</span></router-link>
                        </div>
                        <div class="lym-menu-cont">
                            <div class="lym-menu-item"  :key="index" v-for="(item,index) in menulist">
                                <span class="lym-menuCommon fl" >{{item.title}}</span>
                                <div class="lym-menu-itemCont fl">
                                <!-- {{menulist[index].list}} -->
                                    <!-- <router-link to="{name: 'Menu', params:{userId: 123 }}" :key="i" v-for="(menu,i) in item.list">{{menu}}</router-link> -->
                                    <!-- <router-link :to="{path: '/Menu', query: {menu: menu}}" :key="i" v-for="(menu,i) in item.list">{{menu}}</router-link> -->
                                    <a @click="localhref(menu)" :key="i" v-for="(menu,i) in item.list">{{menu}}</a>
                                </div>
                            </div> 
                        </div>
                        <div class="lym-lookAll"><router-link to="/fenlei">查看全部分类<i class="el-icon-arrow-right"></i></router-link></div>
                    </div>
                </li>
                <li><router-link :to="{ path: '/FoodNews', query:{id: '食界大咖秀主题站'}}">饮食新闻</router-link></li>
                <li>
                    <router-link to="/start" class="lym-Starbucks">星巴克饮品<i class="el-icon-arrow-down"></i></router-link>
                    <div class="lym-menu">
                        <div class="lym-menu-nav">
                            <a><img src="https://cp1.douguo.com/static/nweb/images/jx3.png"><span>精选</span></a>
                            <a><img src="https://i1.douguo.com/upload/banner/1585648022.png" alt=""> <span>最新</span></a>
                            <a><img src="https://cp1.douguo.com/static/nweb/images/menu3.png" alt=""> <span>菜单</span></a>
                        </div>
                        <div class="lym-menu-cont">
                            <div class="lym-menu-item"  :key="index" v-for="(item,index) in  startlist">
                                <span class="lym-menuCommon fl" >{{item.title}}</span>
                                <div class="lym-menu-itemCont fl">
                                <!-- {{menulist[index].list}} -->
                                    <a @click="clikmenu(menu)" :key="i" v-for="(menu,i) in item.list">{{menu}}
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="lym-lookAll">查看全部分类<i class="el-icon-arrow-right"></i></div>
                    </div>
                </li>
                <li><router-link to="/biji">笔记</router-link></li>
                <li><router-link to="/shop">商城</router-link></li>
            </ul>
            <div action="" class="lym-search fl">
                <el-autocomplete
                    popper-class="my-autocomplete"
                    v-model="state"
                    :fetch-suggestions="querySearch"
                    placeholder="请输入内容"
                    @select="handleSelect" class="fl">
                    <template slot-scope="{ item }">
                        <div class="name">{{item.xuhao}}{{ item.value }}</div>
                    </template>
                </el-autocomplete>
                <div class="lym-subimit fl"><i class="el-icon-search"></i></div>
            </div>
            <div class="lym-fabu">
                <span class="fl lym-fabu-btn">发布</span>
                <div class="lym-fabu-cont">
                    <router-link to="fabu">发布菜谱</router-link>
                    <router-link to="/cuangj">创建菜单</router-link>
                </div>
            </div>
            <div class="lym-perinfo fl" v-if="keywords == 0 ">
                <!-- to="./login" -->
                <a class="lym-login" @click="login(1)">登录</a> |
                <a class="lym-register" @click="register(1)">注册</a>
            </div>
            <div class="person fl" v-if="keywords != 0 ">
              <router-link to="/shoucang">
              <el-badge :value="12" class="item">
                 <el-avatar :size="50" :src="circleUrl"></el-avatar>
              </el-badge></router-link>
              <div class="person-list">
                <router-link to="/discuss" is-dot class="item">消息提醒</router-link>
                <router-link to="/shoucang" is-dot class="item">我的收藏</router-link>
                <router-link to="/caogao" is-dot class="item">草稿箱</router-link>
                <router-link to="/Personer"  class="item">账号设置</router-link>
                <a @click="clearkey()"  class="item">退出</a>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
// import { api } from '../apiConfig'
import md5 from '@/assets/js/md5.js'
export default {
  data () {
    return {
      select: '',
      restaurants: [],
      state: '',
      keywords: 0,
       circleUrl: "http://topyun.qicp.vip/VP_2020620175538.jpg",
      menulist: [
        {
          title: '常见菜式',
          list: ['家常菜', '热菜', '凉菜', '主食', '汤', '早餐', '午餐', '海鲜', '孕妇', '甜品']
        },
        {
          title: '中国菜式',
          list: ['川菜', '粤菜', '东北菜', '湘菜']
        },
        {
          title: '外国食谱',
          list: ['韩国', '日本料理', '法国', '意大利餐']
        },
        {
          title: '各种小吃',
          list: ['四川小吃', '陕西小吃', '北京小吃', '广东小吃']
        }
      ],
      startlist: [
        {
          title: '饮料',
          list: ['星巴克玩味冰调™', '手工调制浓缩咖啡', '星冰乐®', '茶瓦纳™', '经典巧克力饮品', '咖啡融合冰淇淋', '星巴克冷萃咖啡系列', '海鲜', '气致™冷萃咖啡']
        },
        {
          title: '美食',
          list: ['星冰粽®', '烘焙', '蛋糕&甜品', '三明治、帕尼尼、卷', '酸奶', '其他美食', '早安新一天']
        },
        {
          title: '咖啡',
          list: ['中度咖啡豆', '深度咖啡豆']
        },
        {
          title: '商品',
          list: ['常规产品', '臻选产品']
        }
      ]
    }
  },
  methods: {
    querySearch (queryString, cb) {
      var restaurants = this.restaurants
      var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return (restaurant) => {
        return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    loadAll () {
      return [
        { xuhao: '1. ', value: '减肥餐' },
        { xuhao: '2. ', value: '家常菜' },
        { xuhao: '3. ', value: '南瓜' },
        { xuhao: '4. ', value: '月子餐' },
        { xuhao: '5. ', value: '饼干' },
        { xuhao: '6. ', value: '宵夜' },
        { xuhao: '7. ', value: '土豆' },
        { xuhao: '8. ', value: '快手菜' },
        { xuhao: '9. ', value: '早餐' }
      ]
    },
    handleSelect (item) {
      console.log(item)
    },
    handleIconClick (ev) {
      console.log(ev)
    },
    // 登录跳转
    login (c) {
      console.log(c)
      this.$store.commit('clik', 0)
      this.$router.push({ path: './login' })
    },
    // 注册跳转
    register (c) {
      this.$store.commit('clik', 0)
      this.$router.push({ path: './register' })
    },
     // 星巴克菜单点击渲染
     clikmenu (values) {
      var arr = ['星巴克玩味冰调™','星冰乐®','茶瓦纳™','手工调制浓缩咖啡','烘焙','蛋糕&甜品','三明治、帕尼尼、卷','中度咖啡豆','深度咖啡豆','常规产品','臻选产品']
      var arr2 = ['xing','ice','tea','Espresso','bake','SandWich','coffeeBean','DepathCoffe','Conventional','Choose']
      var arr1 = ['GetSetIcetune','GetSetStar','GetSetTea','GetSetEspresso','GetSetBaking','GetSetCake','GetSetSandwich','GetSetModerate','GetSetDepth','GetSetShoppingcg','GetSetShoppingcg']
      var duankou = arr1[arr.indexOf(values)]
      var changgui = 1
      if(values === '常规产品' || values === '臻选产品') {
       changgui = values === '常规产品' ? 1 : 2
      } 
      this.axiosquest(duankou, changgui)
      this.$router.push({ path: '/drink' , query: { menu: arr2[arr.indexOf(values)] } })
    },
    axiosquest (duankou) {
      var timestamp = new Date().getTime()
      var publicwords = md5((timestamp + 1000) * 2)
      axios({
        method: 'get',
        url: `http://topyun.qicp.vip/${duankou}`,
        params: {
          uid: '1',
          publicwords: publicwords,
          timegtime: timestamp
        }
      }).then(back => {
        if (back.status === 200) {
          //  将back数据存入list
          this.list = back
          // 将vuex里面的data方法
          this.$store.commit('data',back.data)
        } else {
          console.log(back.message)
          // this.$router.push('/drink')
        }
      }).catch(err => {
        console.log(err)
      })
    },
    localhref (value) {
      window.localStorage.setItem('menuName', value || '热菜')
      this.$router.push({ path: '/Menu' })
    },
    // 退出
    clearkey () {
      window.localStorage.setItem('user',0)
      this.keywords = 0
      console.log(111)
    }
  },
  mounted () {
    this.restaurants = this.loadAll()
    this.keywords = window.localStorage.getItem('user') || 0
  }
}
</script>

<style lang="less" scoped>
@import '~css/public.less';
    .lym-header{
        .size(100%,60px);
        top: 0;
        left: 0;
        .fiexd();
        .center(text-x);
        z-index: 99;
        background: @colorfff;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
        .lym-header-cont{
            .size(1000px,100%);
            .padding(15px,0,15px,0);
            font-size: 15px;
            background: @colorfff;
            margin: 0 auto;
            position: relative;
            // logo
            .lym-logo{
                height: 30px;
                img{
                    max-width: 100%;
                    max-height: 100%;
                }
            }
            .lym-header-nav{
                .margin(0,0,0,20px);
                color: @mincolor;
                .font-size(15);
                .line-height(30px);
                a:hover{
                        .cursor();
                        color: @font-maincolor;
                        text-decoration: none;
                    }
                li{
                    &:hover{
                        .lym-caipu{
                           color: @font-maincolor;
                        }
                      .lym-menu{
                        display: block;
                      }
                    }
                    height: 50px;
                    float: left;
                    padding: 0 12px;
                    i{
                        font-weight: bold;
                    }
                    // 菜谱下拉
                    .lym-menu{
                        .size(800px,auto);
                    }
                    .lym-menu,
                    .lym-Starbucks-cont{
                        display: none;
                        box-shadow: 0 2px 5px 0 rgba(64,71,81,0.10);
                        border-bottom-right-radius: 8px;
                        border-bottom-left-radius: 8px;
                        .font-size(14px);
                        position: absolute;
                        top: 60px;
                        left: 45px;
                        z-index: 99;
                        padding-left: 16px;
                        background: @colorfff;
                        .lym-menu-nav{
                            line-height: 55px;
                            overflow: hidden;
                           a{
                            // display: inline-block;
                            color: #383830;
                            margin-right: 43px;
                            float: left;
                            span{
                                transition: 0.5s;
                            }
                            &:hover span{
                                display: inline-block;
                                transform: translateX(5px);
                            }
                            img{
                                height: 16px;
                                margin-top: 20px;
                            }
                           }
                        }
                        .lym-menu-cont{
                            .size(100%,100%);
                            .lym-menu-item{
                                overflow: hidden;
                                margin-bottom: 32px;
                                .lym-menuCommon{
                                    .center(text-x);
                                    line-height: 30px;
                                    font-weight: bold;
                                    color:@mincolor;
                                }
                                .lym-menu-itemCont{
                                    .size(666px,auto);
                                        text-align: left;
                                        margin-left: 60px;
                                        color: #333333;
                                        a{
                                            margin-right: 25px;
                                            .inline-block();
                                            float: left;
                                            line-height: 30px;
                                        }
                                }
                            }
                        }
                    }
                    // 星巴克下拉
                    .lym-Starbucks-cont{
                        .size(600px,auto);
                    }
                }
            }
            .lym-search{
                .inline-block();
                .margin(0,0,0,15px);
                height: 30px;
                position: relative;
                .el-input{
                    width: inherit;
                    float: left;
                }
               /deep/ .el-input input{
                   &.el-input__inner{
                       border-radius: 0;
                    }
                    .size(182px,30px);
                    .line-height(16px);
                    .padding(7px,10px,7px,10px);
                    border-top-left-radius: 4px !important;
                    border-bottom-left-radius: 4px !important;
                    background: #f7f7f7;
                    outline: 0;
                    .font-size(12px);
                    &.el-input__inner:focus,
                    &.el-input__inner:hover {
                        border-color: transparent;
                    }
                }
                .lym-subimit{
                    .size(38px,30px);
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                    .cursor();
                    background: @font-maincolor;
                    line-height: 30px;
                    color: @colorfff;
                }
            }
            .lym-fabu{
                line-height: 30px;
                height: 50px;
                float: left;
                &:hover .lym-fabu-cont{
                    display: block;
                }
                .lym-fabu-btn{
                    .size(60px,30px);
                    .btn();
                    .center(text-x);
                    margin-left: 15px;
                    &:hover {
                        .cursor();
                    }
                }
                .lym-fabu-cont{
                    width: 130px;
                    background: #fff;
                    .border-radius(5px);
                    box-shadow: 0 0 5px 0 rgba(64,71,81,0.10);
                    position: absolute;
                    top: 60px;
                    right: 80px;
                    padding: 8px;
                    display: none;
                    a{
                        display: inline-block;
                        width: 100%;
                        &:hover{
                            .cursor();
                            color: @font-maincolor;
                        }
                    }
                }

            }
            .lym-perinfo{
                .inline-block();
                margin-left: 20px;
                line-height: 30px;
                height: 30px;
            }
            .person{
              position: relative;
              height: 46px;
              margin-left: 50px;
              &:hover .person-list{
                  display: block;
                  cursor: pointer;
                }
              /deep/ .el-avatar{
                width: 30px !important;
                height: 30px !important;
                border: 1px solid gainsboro;
                line-height: 45px;
              }
              .person-list{
                position: absolute;
                top: 46px;
                right: -5px;
                background: #fff;
                width: 108px;
                border-radius: 5px;
                line-height: 28px;
                display: none;
                text-align: center;
                a{
                  display: block !important;
                  &:hover{
                    cursor: pointer;
                    background: lavender;
                  }
                }
              }
            }
        }
        .lym-lookAll{
            width: 100%;
            color: #256DC6;
            border-top: 1px solid #E5E3DF;
            padding: 10px;
        }
        position: fixed;
    }
</style>
