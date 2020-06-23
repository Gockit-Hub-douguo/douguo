<template>
    <div class="content">
         <h2 class="title">最新推荐菜谱</h2>
            <!-- <div>111</div> -->
            <ul class="list">
                <li :key="key" v-for="(item, key) in worksList" class="item">
                    <a>
                        <img width="300px" height="199px" :src="item.wimgUrl" alt="#爱乐甜夏日轻脂甜蜜#它啊，不可一世">
                    </a>
                    <div class="relative">
                        <a class="title">{{item.works_title}}</a>
                        <div>
                            <a class="cover">
                                <img style="border-radius: 50%" width="20px" :src="item.userphoto" alt="">
                                <span style="margin-left: 10px" class="cover-name">{{item.username}}</span>
                                <span class="fr"><i class="el-icon-view"></i> 1111<i class="el-icon-star-off">222</i></span>
                            </a>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="pages">
                <a></a>
                <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
                </el-pagination>
            </div>
        </div>

</template>

<script>
export default {
   created(){
       this.$store.dispatch('getworkslist')
   },
  data () {
    return {
      caipulist: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  },
  computed: {
      worksList () {
          return this.$store.state.worksList
      }
  }
}
</script>

<style lang="less" scoped>
// @import '~@/assets/css/caipu.less'
.content {
    width: 1000px;
    margin: 0 auto;
    .type-tab {
        margin-bottom: 25px;
        margin-top: 13px;
        .type-head {
            font-size: 14px;
            text-align: center;
            width: auto;
            margin: 0 auto;
            display: inline-block;
            a {
                display: inline-block;
                float: left;
                color: #383830;
                height: 42px;
                line-height: 42px;
                margin-right: 30px;
            }
        }
    }
    .title {
        font-size: 20px;
        color: #333;
        line-height: 20px;
        font-weight: bold;
        margin-bottom: 25px;
    }
    .list {
        .item {
            float: left;
            width: 300px;
            height: 270px;
            overflow: hidden;
            margin: 0 33px 33px 0;
            .relative {
                position: relative;
                .title {
                    // display: block;
                    font-size: 15px;
                    color: #333;
                    line-height: 40px;
                    padding: 10px 0;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                .title:hover {
                    color: orange;
                }
            }
        }
    }
    .pages {
        text-align: center;
        margin: 20px auto;
        a {
            padding: 2px 6px 3px;
        }
    }
}
.cover {
    // display: inline-block;
    width: 300px;
    height: 200px;
    overflow: hidden;
    border-radius: 8px;
    display: block;
    // background: #F9F9F9;
    // border: 1px solid #ccc;
}
.cover-span {
    display: inline-block;
    margin-top: 10px;
    color: red;
}
.fr {
    float: right;
    font-size: 14px;
}
.cover-name {
    float: left;
    font-size: 14px;
}
.cover-name:hover {
    color: orange;
}
.cover img {
    float: left;
}
.el-icon-star-off {
    margin-left: 20px;
}
</style>
