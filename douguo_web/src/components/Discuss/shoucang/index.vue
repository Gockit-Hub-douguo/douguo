<template>
    <div class="showMain">
        <div class="shows">
            <div class="show-img">
                <img :src="ctUrl"/>
            </div>
            <div class="showIn">
                <a class="showname">前端小白</a>
                <p class="sex"><i class="el-icon-female"></i>北京 西城区</p>
                <p>经验值:35</p>
            </div>
            <div class="show-right">
                <div class="rightFans">
                    <router-link to="/guanzhu" class="floF">
                    <div>
                        <p>3</p>
                        <p>关注</p>
                    </div>
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
                        <p>笔记</p>
                    </div>
                </div>
            </div>
         </div>
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
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    computed: {
       ctUrl(){
            return this.$store.state.ulist.userphoto
        }
      }
  };
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
    display: inline-block;
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
}
.floF {
    float: left;
}
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
