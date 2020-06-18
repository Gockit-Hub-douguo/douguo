<template>
    <div class="shoucang">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="菜谱" name="first">
            <div class="box">暂无数据~</div>
        </el-tab-pane>
        <el-tab-pane label="笔记" name="second">
            <div class="box">暂无数据~</div>
        </el-tab-pane>
  </el-tabs>
  <div>你的当前位置: 豆果美食> 个人中心 > 草稿箱 </div>
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
  };
</script>
<style scoped>
.shoucang {
    width: 1000px;
    margin: 0 auto;
    padding-top: 60px;
}
.box {
    height: 330px;
    line-height: 330px;
    text-align: center;
}
</style>