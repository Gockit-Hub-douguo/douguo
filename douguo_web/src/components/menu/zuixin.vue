<template>
    <div class="content">
        <div class="navbars">
      <div class="Firstlevelnavigation">
        <router-link to='/Menu'>菜谱</router-link>
        <router-link to='/mofu' class="active">菜单</router-link>
        <router-link to='/Menuuser'>用户</router-link>
      </div>
      <h3>"热菜"的相关菜谱</h3>
      
    </div>
        <div class="menu-list">
            <ul>
                <li>
                    <router-link class="cover" to="">
                        <img class="wb100" src="https://cp1.douguo.com/upload/caiku/c/4/b/400x266_c4384853514cc85ace5bd50e6412daeb.jpg" alt="">
                        <div class="menuinfo absolute">
                            <p class="name text-lips">备战团圆饭 美味新一年</p>
                            <p class="rnum">15道菜谱</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link class="cover" to="">
                        <img class="wb100" src="https://cp1.douguo.com/upload/caiku/c/4/b/400x266_c4384853514cc85ace5bd50e6412daeb.jpg" alt="">
                        <div class="menuinfo absolute">
                            <p class="name text-lips">备战团圆饭 美味新一年</p>
                            <p class="rnum">15道菜谱</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link class="cover" to="">
                        <img class="wb100" src="https://cp1.douguo.com/upload/caiku/c/4/b/400x266_c4384853514cc85ace5bd50e6412daeb.jpg" alt="">
                        <div class="menuinfo absolute">
                            <p class="name text-lips">备战团圆饭 美味新一年</p>
                            <p class="rnum">15道菜谱</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link class="cover" to="">
                        <img class="wb100" src="https://cp1.douguo.com/upload/caiku/c/4/b/400x266_c4384853514cc85ace5bd50e6412daeb.jpg" alt="">
                        <div class="menuinfo absolute">
                            <p class="name text-lips">备战团圆饭 美味新一年</p>
                            <p class="rnum">15道菜谱</p>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link class="cover" to="">
                        <img class="wb100" src="https://cp1.douguo.com/upload/caiku/c/4/b/400x266_c4384853514cc85ace5bd50e6412daeb.jpg" alt="">
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

<style lang="less" scoped>
@import '~privatecss/menu.less';
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