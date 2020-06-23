<template>
    <div class="showMain">
        <div class="shows">
            <div class="show-img">
                <img src="https://tx1.douguo.com/upload/photo/4/9/4/140_4907e51a2d5676bcd89d7b738cedcbb4.jpg"/>
            </div>
            <div class="showIn">
                <a class="showname">前端小白</a>
                <p class="sex"><i class="el-icon-female"></i>北京 西城区</p>
                <p>经验值:35</p>
            </div>
            <div class="show-right">
                <div class="rightFans">
                    <div class="floF">
                        <p>3</p>
                        <p>关注</p>
                    </div>
                     <div class="floF">
                        <p>0</p>
                        <p>粉丝</p>
                    </div>
                 <router-link to="/shoucang" class="floF">
                    <div>
                        <p>0</p>
                        <p>菜谱</p>
                    </div>
                 </router-link>
                 <router-link to="/shoucang" class="floF">
                    <div>
                        <p>0</p>
                        <p>笔记</p>
                    </div>
                </router-link>
            </div>
         </div>
    </div>
         <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="关注我的人" name="first"></el-tab-pane>
            <el-tab-pane label="我关注的人" name="second">配置管理</el-tab-pane>
        </el-tabs>
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
    }
  }
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
</style>