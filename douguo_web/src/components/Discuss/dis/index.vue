<template>
    <div class="dis-main">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="评论及回复" name="first">
            <div class="remind">暂无数据</div>
        </el-tab-pane>
        <el-tab-pane label="收藏及喜欢" name="second"><div class="remind">暂无数据</div></el-tab-pane>
        <el-tab-pane label="关注提醒" name="third">
          <div class="thirdd">
            <div>用户“yn高小疯-亲子烘焙组”关注了你</div>
            <span style="margin-top:20px;">2020.1.1 14：00</span>
          </div>
        </el-tab-pane>
        <el-tab-pane label="官方通知" name="fourth">
          <div class="guanfang">为了回报新老顾客朋友，本店新推出各种饮品，欢迎大家前来品尝！</div>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<style scoped>
el-tabs el-tab-pane:hover {
    color: #ffaa00;
}
.dis-main {
    padding-top: 60px;
    width: 1000px;
    margin: 0 auto;
}
.remind {
    min-height: 400px;
    margin-top: 10px;
    font-size: 15px;
    text-align: center;
    line-height: 400px;
}
.guanfang {
  width: 300px;
  height: 300px;
  font-weight: 600;
  color:#666;
  text-align: center;
  font-size: 18px;
  line-height: 50px;
  margin-top: 30px;
  margin-left: 262px;
}
.thirdd div {
height: 60px;
}
</style>

<script>
  export default {
    data() {
      return {
        activeName: 'third'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>