<template>
    <div class="content">
        <div class="menu-list">
            <ul>
                <li :key="key" v-for="(item, key) in indexwoks" class="item">
                    <router-link class="cover" to="">
                        <img class="wb100" :src="item.wimgUrl" alt="">
                        <div class="menuinfo absolute">
                            <p class="name text-lips">备战团圆饭 美味新一年</p>
                            <p class="rnum">15道菜谱</p>
                        </div>
                    </router-link>
                </li>
            </ul>
            <div class="pages">
                <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
                </el-pagination>
            </div>
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
    indexwoks(){
      const list = []
      for(var i = 0; i < 5; i++){
        list.push(this.$store.state.worksList[i])
      }
      return list
    }
  }
}
</script>

<style lang="less" scoped>
    .content {
        width: 1000px;
        margin: 0 auto;
        .new-hot {
            position: relative;
            line-height: 14px;
            margin-bottom: 25px;
            a {
                font-size: 14px;
                color: #999;
                padding: 0 10px;
            };
            .active {
                color: #333;
                font-weight: bold;
            }
        };
        .menu-list{
            ul {
                overflow: hidden;
                li {
                    width: 306px;
                    height: 172px;
                    float: left;
                    position: relative;
                    margin-right: 27px;
                    margin-bottom: 30px;
                    overflow: hidden;
                    .cover {
                        display: block;
                        width: 306px;
                        height: 172px;
                        overflow: hidden;
                        .wb100 {
                            display: block;
                            width: 100%;
                        }
                    }
                };
                .menuinfo {
                    // position: relative;
                    top: 0;
                    left: 0;
                    padding-top: 50px;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,.14);
                    text-align: center;
                };
                .name {
                    font-weight: bold;
                    padding-top: 16px;
                    font-size: 16px;
                };
                p {
                    width: 290px;
                    color: #fff;
                    margin: 0 auto;
                    padding-top: 10px;    
                }
            }
            .pages {
                text-align: center;
                margin: 20px auto;
            }
        }
    }
    .absolute {
        position: absolute;
    }
</style>