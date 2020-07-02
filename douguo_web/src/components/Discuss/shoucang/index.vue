<template>
    <div class="showMain">
        <div class="shows">
            <div class="show-img">
<<<<<<< HEAD
                <img :src="userinfolists.userimg"/>
=======
                <img :src="ctUrl"/>
>>>>>>> 8bd8acbd3c00ff7f31516691929b0a0a541e60b3
            </div>
            <div class="showIn">
                <a class="showname">{{userinfolists.userasname}}</a>
                <p class="sex">
                  <i class="el-icon-male" v-if="userinfolists.sex"></i>
                  <i class="el-icon-female" v-else></i>
                  {{userinfolists.adress}}</p>
                <p>经验值:{{userinfolists.exp}}</p>
                <p>{{userinfolists.js}}</p>
            </div>
            <div class="show-right">
                <div class="rightFans">
                    <div class="floF">
                        <p>{{userinfolists.gz}}</p>
                        <p>关注</p>
                    </div>
<<<<<<< HEAD
                     <div class="floF">
                        <p>{{userinfolists.fans}}</p>
                        <p>粉丝</p>
                    </div>
                 <router-link to="/shoucang" class="floF">
                    <div>
                        <p>{{userinfolists.cp}}</p>
                        <p>菜谱</p>
                    </div>
                 </router-link>
                 <router-link to="/shoucang" class="floF">
                    <div>
                        <p>{{userinfolists.bj}}</p>
=======
                    </router-link>
                     <router-link to="/guanzhu" class="floF">
                     <div>
                        <p>3</p>
                        <p>粉丝</p>
                    </div>
                     </router-link>
                    <div class="floF">
                        <p>2</p>
                        <p>菜谱</p>
                    </div>
                    <div class="floF">
                        <p>3</p>
>>>>>>> 8bd8acbd3c00ff7f31516691929b0a0a541e60b3
                        <p>笔记</p>
                    </div>
                </router-link>
            </div>
         </div>
<<<<<<< HEAD
    </div>
         <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="关注我的人" name="first"></el-tab-pane>
            <el-tab-pane label="我关注的人" name="second">配置管理</el-tab-pane>
        </el-tabs>
=======
         <div class="acter">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="概览" name="first">
                    <div class="box">暂无数据~</div>
                </el-tab-pane>
                <el-tab-pane label="菜谱" name="second">
                    <div class="actr-img">
                        <img src="https://cp1.douguo.com/upload/note/c/9/d/750_c92b6ac8bace782da0cf4ed9c302705d.jpg">
                        <div class="act-t">【雪梨三吃】3个方法吃对梨，春天润肺最给力！</div>
                    </div>
                    <div class="actr-img">
                        <img src="https://cp1.douguo.com/upload/note/c/7/c/750_c7f9e1791ba6bc3d942ff35523efc2bc.jpg">
                        <div class="act-t">【雪媚娘】这个草莓味包子，甜过软妹子！</div>
                    </div>
                     <div class="actr-img">
                        <img src="https://cp1.douguo.com/upload/note/c/9/d/750_c92b6ac8bace782da0cf4ed9c302705d.jpg">
                        <div class="act-t">【雪梨三吃】3个方法吃对梨，春天润肺最给力！</div>
                    </div>
                    <div class="actr-img">
                        <img src="https://cp1.douguo.com/upload/note/c/7/c/750_c7f9e1791ba6bc3d942ff35523efc2bc.jpg">
                        <div class="act-t">【雪媚娘】这个草莓味包子，甜过软妹子！</div>
                    </div>
                     <div class="actr-img">
                        <img src="https://cp1.douguo.com/upload/note/c/9/d/750_c92b6ac8bace782da0cf4ed9c302705d.jpg">
                        <div class="act-t">【雪梨三吃】3个方法吃对梨，春天润肺最给力！</div>
                    </div>
                    <div class="actr-img">
                        <img src="https://cp1.douguo.com/upload/note/c/7/c/750_c7f9e1791ba6bc3d942ff35523efc2bc.jpg">
                        <div class="act-t">【雪媚娘】这个草莓味包子，甜过软妹子！</div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="菜单" name="third">
                    <div class="box">暂无数据~</div></el-tab-pane>
                <el-tab-pane label="笔记" name="fourth">
                    <div class="box">暂无数据~</div></el-tab-pane>
                <el-tab-pane label="收藏" name="five">
                    <div class="box">暂无数据~</div></el-tab-pane>
                <el-tab-pane label="美食日记" name="six">
                    <div class="box">暂无数据~</div></el-tab-pane>
            </el-tabs>
         </div>
         <div style="margin-top:20px;">你的当前位置: 豆果美食> 个人中心 </div>
>>>>>>> 8bd8acbd3c00ff7f31516691929b0a0a541e60b3
    </div>
</template>

<script>
export default {
    data() {
      return {
        activeName: 'first',
        userinfolists: [{ userimg: '' }]
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
<<<<<<< HEAD
    mounted () {
      var uid = this.$route.query.uid
      this.$store.dispatch('loadsuserinfolist', uid)
    },
    computed: {
      userinfolist () {
        return this.$store.state.active.userinfodata
      }
    },
    watch: {
      userinfolist (newValue) {
        this.userinfolists = newValue[0]
      }
    }
  }
=======
    computed: {
       ctUrl(){
            return this.$store.state.ulist.userphoto
        }
      }
  };
>>>>>>> 8bd8acbd3c00ff7f31516691929b0a0a541e60b3
</script>
<style lang="less" scoped>
.showMain {
    width: 1000px;
    margin: 0 auto;
    padding-top: 60px;
      overflow: hidden;
}
.shows {
    margin: 40px 0 20px;
    padding-bottom: 40px;
    overflow: hidden;
}
.show-img img {
    display: block;
    width: 120px;
    height: 120px;
    margin-right: 12px;
    border-radius: 50%;
    float: left;
}
.showIn {
        width: 480px;
        float: left;
}
.showname {
    display: inline-block;
    max-width: 296px;
    margin-top: 9px;
    font-size: 20px;
    line-height: 24px;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    vertical-align: middle;
}

.sex {
    margin-top: 8px;
    i.el-icon-male{
      font-size: 18px;
      color: aqua;
      float: left;
    }
    i.el-icon-male{
      font-size: 18px;
      float: left;
      color: pink;
    }
}
.showIn p {
      margin-top: 11px;
    font-size: 12px;
    line-height: 16px;
    color: #666;

}
.show-right {
    float: right;
    overflow: hidden;
}
.rightFans {
    width: 320px;
    height: 62px;
    padding: 15px 0;
    border-radius: 4px;
    background: #F1F7FA;
    text-align: center;
    overflow: hidden;
    div {
    width: 80px;
    border-right: 1px solid #D1DFE6;
    }
    p {
        cursor: pointer;
    }
}
.floF {
    float: left;
    &:hover {
            color: orange;
        }
    a {
            color: #333;
    text-decoration: none;
    }
}
<<<<<<< HEAD
</style>
=======
.acter {
    margin-top: 30px;
}
.box {
    height: 330px;
    line-height: 330px;
    text-align: center;
}
.actr-img {
    width: 200px;
    overflow: hidden;
    float: left;
    margin: 20px 20px;
}
.actr-img img {
    width: 200px;
    height: 200px;
}
.act-t {
    height: 20px;
    font-size: 14px;
    color: #666;
    margin-top: 10px;
    padding-bottom: 10px;
    overflow: hidden;
} 
</style>
>>>>>>> 8bd8acbd3c00ff7f31516691929b0a0a541e60b3
