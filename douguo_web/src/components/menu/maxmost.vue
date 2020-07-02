<template>
  <!-- 收藏最多 -->
  <div>
    <!-- 菜单层 -->
    <div class="navbars">
      <div class="Firstlevelnavigation">
        <router-link to='/Menu' class="active">菜谱</router-link>
        <router-link to='/mofu'>菜单</router-link>
        <router-link to='/Menuuser'>用户</router-link>
      </div>
      <h3>"{{title}}"的相关菜谱</h3>
      <div class="Secondarynavigation">
        <router-link to='/Menu'>综合最佳</router-link>
        <span>|</span>
        <router-link to='/Menumaxmoust' class="active">收藏最多</router-link>
        <span>|</span>
        <router-link to='/Menumost'>做过最多</router-link>
      </div>
    </div>
    <div class="conter">
      <!-- 内容层 -->
      <div class="LeftInfo fl">
        <ul>
          <li v-for="(it, k) in ssslist" :key="k">
            <img :src="it.wimgUrl" alt="">
            <div>
              <h3><router-link to='#'>{{it.works_title}}</router-link></h3>
              <p class="author">{{it.works_class}}</p>
              <p class="time">
                收藏人数 {{it.works_type}}
              </p>
              <p class="linkurl">
                <router-link to='#'>
                  <img :src="it.userphoto" alt="">
                  <em class="fl">{{it.username}}</em>
                  <span class="fl iconx"></span>
                </router-link>
              </p>
            </div>
          </li>
        </ul>
      </div>
      <!-- 广告位 -->
      <div class="Right fr">
        <adsense></adsense>
      </div>
    </div>  
    <!-- 翻页 -->
    <div class="pages">
      <a></a>
      <el-pagination
      background
      layout="prev, pager, next"
      :total="1">
      </el-pagination>
    </div>
    <!-- 定位 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>豆果美食</el-breadcrumb-item>
      <el-breadcrumb-item>收藏最多</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<style lang="less" scoped>
  @import '~privatecss/menu.less';
</style>

<script>
  import adsense from '@/components/FoodNews/slidergg'
  export default {
    created(){
        this.$store.dispatch('getworkslist')
      },
    data() {
      return {
        value: 4.7,
        title: '热菜',
        ssslist: []
      }
    },
    components: {
      adsense
    },
    methods: {
      fu () {
        this.title = window.localStorage.getItem('menuName') || '热菜'
        // this.title = this.$route.query.menu || '热菜'
      }
    },
    mounted () {
      this.fu()
    },
    computed: {
      indexwoks(){
        const list = []
        for(var i = 0; i < 9; i++){
          list.push(this.$store.state.worksList[i])
        }
        return list
      }
    },
    watch: {
      indexwoks (newval) {
        for(var i = 0; i < newval.length + 10; i++){
          var rdm = Math.floor(Math.random() * newval.length)
          newval.push(newval[rdm])
          newval.splice(rdm,1)
        }
        this.ssslist = newval
      }
    }
  }
</script>
