<template>
  <!-- 菜谱组件 -->
  <div>
    <div class="Selectedrecipes">
      <!-- 标题 -->
      <div class="menuTitle">
        <h3 class="fl">每日精选菜谱</h3> <el-link type='primary'  :underline="false" class="fr">更多 ></el-link>
      </div>
      <!-- 内容层 -->
      <ul class="menuList">
        <li v-for="(item, index) in imgMenu" :key="index" :class="{clearMR: index == 3 || index == 7}">
          <div class="menuOne">
            <a><img :src="item.url" alt=""></a>
            <p class="Mtitle"><a class="now">{{item.menutitle}}</a></p>
            <p class="Mauthor">by <a>{{item.menuauthor}}</a></p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
  @import '~privatecss/home.less';
  // @import '~css/public_Css.less';
</style>

<script>
export default {
  // 接收传递的参数
  props: {
    // datalists: Array
  },
  data () {
    return {
      imgMenu: [{
        url: 'https://cp1.douguo.com/upload/caiku/3/6/4/220x220_36106587c0b02d546014ad6cc0a98374.jpg',
        link_url: '#',
        menutitle: '无敌美味的卫生卤味',
        menuauthor: '小豆芽__'
      }, {
        url: 'https://cp1.douguo.com/upload/caiku/b/6/b/220x220_b692494181050ede8050a8ed6e5102eb.jpg',
        link_url: '#',
        menutitle: '这么漂亮的冰粉你见过吗？冰凉爽口，夏日必备',
        menuauthor: '浅浅小食光'
      }, {
        url: 'https://cp1.douguo.com/upload/caiku/d/4/9/220x220_d4ca8502cfe1eea9494139b436500af9.jpeg',
        link_url: '#',
        menutitle: '『自制冰红茶』',
        menuauthor: '幺蛾子爱吃虾'
      }, {
        url: 'https://cp1.douguo.com/upload/caiku/c/e/4/220x220_ce203ebcd8d0eef65f16a85781e4f5f4.jpeg',
        link_url: '#',
        menutitle: '超简单又好吃的葱油黑鱼片',
        menuauthor: '烟烟酱'
      }, {
        url: 'https://cp1.douguo.com/upload/caiku/b/1/a/220x220_b10e55b98a4c557a3bec863cb6917dba.jpeg',
        link_url: '#',
        menutitle: '红枣粽',
        menuauthor: 'A余果儿'
      }, {
        url: 'https://cp1.douguo.com/upload/note/1/2/1/320_126630c87a45bdf0384d67da0323ea91.jpeg',
        link_url: '#',
        menutitle: '美好时光 糖葫芦',
        menuauthor: '二瓜86'
      }, {
        url: 'https://cp1.douguo.com/upload/caiku/b/f/5/220x220_bff4c5ac8511fbd911f5c73ca15dd855.jpg',
        link_url: '#',
        menutitle: '小陆泡椒凤爪',
        menuauthor: '小鹿先森'
      }, {
        url: 'https://cp1.douguo.com/upload/caiku/3/6/4/220x220_36106587c0b02d546014ad6cc0a98374.jpg',
        link_url: '#',
        menutitle: '无敌美味的卫生卤味',
        menuauthor: '小豆芽__'
      }]
    }
  }
}
</script>
