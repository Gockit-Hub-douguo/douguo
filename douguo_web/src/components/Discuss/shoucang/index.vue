<template>
    <div class="showMain">
        <div class="shows">
            <div class="show-img">
                <img :src="userinfolists.userimg"/>
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
        activeName: 'first',
        userinfolists: [{ userimg: '' }]
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
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
</style>