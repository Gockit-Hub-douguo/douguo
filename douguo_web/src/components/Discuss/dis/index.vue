<template>
    <div class="dis-main">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="评论及回复" name="first">
            <div class="remind">暂无数据</div>
        </el-tab-pane>
        <el-tab-pane label="收藏及喜欢" name="second"><div class="remind">暂无数据</div></el-tab-pane>
        <el-tab-pane label="关注提醒" name="third"><div class="remind">暂无数据</div></el-tab-pane>
        <el-tab-pane label="官方通知" name="fourth"><div class="remind">暂无数据</div></el-tab-pane>
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
</style>

<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>