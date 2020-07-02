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
                        <p>3</p>
                        <p>粉丝</p>
                    </div>
                 <router-link to="/shoucang" class="floF">
                    <div>
                        <p>2</p>
                        <p>菜谱</p>
                    </div>
                 </router-link>
                 <router-link to="/shoucang" class="floF">
                    <div>
                        <p>3</p>
                        <p>笔记</p>
                    </div>
                </router-link>
            </div>
         </div>
    </div>
         <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="关注我的人" name="first">
                <div class="active-main">
                    <div class="act-l">
                        <div class="act-img"><img src="https://tx1.douguo.com/upload/photo/7/5/d/70_u91412847591064075648.jpeg"/></div>
                        <div class="act-tit">+ 关注</div>
                    </div>
                    <div class="act-ri">
                        <div class="act-i">yn高小疯-亲子烘焙组<img src="https://i1.douguo.com/upload/note/7/1/4/71af515a1888a6f9c5aed4a0b17d3f44.png" /></div>
                        <div style="color:#ccc; font-size:14px;margin-top:10px;margin-left:100px">普通用户</div>
                        <div style="margin-left:100px;padding-top:23px;">粉丝3 菜谱0</div>
                   </div>
                </div>
                 <div class="active-main">
                    <div class="act-l">
                        <div class="act-img"><img src="https://tx1.douguo.com/upload/photo/8/1/b/70_u66248974549804193122.jpg"/></div>
                        <div class="act-tit">+ 关注</div>
                    </div>
                    <div class="act-ri">
                        <div class="act-i">yn高小疯-亲子烘焙组<img src="https://i1.douguo.com/upload/note/7/1/4/71af515a1888a6f9c5aed4a0b17d3f44.png" /></div>
                        <div style="color:#ccc; font-size:14px;margin-top:10px;margin-left:100px">普通用户</div>
                        <div style="margin-left:100px;padding-top:23px;">粉丝3 菜谱0</div>
                   </div>
                </div>
                <div class="active-main">
                    <div class="act-l">
                        <div class="act-img"><img src="https://tx1.douguo.com/upload/photo/8/7/b/70_u12121085288767081642.jpg"/></div>
                        <div class="act-tit">+ 关注</div>
                    </div>
                    <div class="act-ri">
                        <div class="act-i">元宵juovUti<img src="https://i1.douguo.com/upload/note/7/1/4/71af515a1888a6f9c5aed4a0b17d3f44.png" /></div>
                        <div style="color:#ccc; font-size:14px;margin-top:10px;margin-left:100px">普通用户</div>
                        <div style="margin-left:100px;padding-top:23px;">粉丝3 菜谱0</div>
                   </div>
                </div>
            </el-tab-pane>
            <el-tab-pane label="我关注的人" name="second">
                 <div class="active-main">
                    <div class="act-l">
                        <div class="act-img"><img src="https://tx1.douguo.com/upload/photo/8/7/b/70_u12121085288767081642.jpg"/></div>
                        <div class="act-tit">+ 已关注</div>
                    </div>
                    <div class="act-ri">
                        <div class="act-i">元宵juovUti<img src="https://i1.douguo.com/upload/note/7/1/4/71af515a1888a6f9c5aed4a0b17d3f44.png" /></div>
                        <div style="color:#ccc; font-size:14px;margin-top:10px;margin-left:100px">普通用户</div>
                        <div style="margin-left:100px;padding-top:23px;">粉丝3 菜谱0</div>
                   </div>
                </div>
                 <div class="active-main">
                    <div class="act-l">
                        <div class="act-img"><img src="https://tx1.douguo.com/upload/photo/0/0/0/70_u5150254020081115644.jpg"/></div>
                        <div class="act-tit">+ 已关注</div>
                    </div>
                    <div class="act-ri">
                        <div class="act-i">元宵juovUti<img src="https://i1.douguo.com/upload/note/7/1/4/71af515a1888a6f9c5aed4a0b17d3f44.png" /></div>
                        <div style="color:#ccc; font-size:14px;margin-top:10px;margin-left:100px">普通用户</div>
                        <div style="margin-left:100px;padding-top:23px;">粉丝3 菜谱0</div>
                   </div>
                </div>
                 <div class="active-main">
                    <div class="act-l">
                        <div class="act-img"><img src="https://tx1.douguo.com/upload/photo/a/d/9/70_u71909986347614220632.gif"/></div>
                        <div class="act-tit">+ 已关注</div>
                    </div>
                    <div class="act-ri">
                        <div class="act-i">元宵juovUti<img src="https://i1.douguo.com/upload/note/7/1/4/71af515a1888a6f9c5aed4a0b17d3f44.png" /></div>
                        <div style="color:#ccc; font-size:14px;margin-top:10px;margin-left:100px">普通用户</div>
                        <div style="margin-left:100px;padding-top:23px;">粉丝3 菜谱0</div>
                   </div>
                </div>
            </el-tab-pane>
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
.active-main {
    width: 234px;
    height: 100px;
    float: left;
    margin-bottom: 20px;
    margin-left: 20px;
}
.act-img img{
    width: 46px;
    height: 46px;
    border-radius: 50%;
    margin: 10px 10px;
}
.act-l {
    float: left;
}
.act-tit {
    width: 80px;
    height: 30px;
    line-height: 28px;
    border-radius: 4px;
    border: 1px solid #333;
    color: #333;
    font-size: 12px;
    text-align: center;
}
.act-i {
    height: 20px;
    overflow: hidden;
    font-weight: 600;
    font-size: 14px;
    margin-top: 10px;
    img {
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
    }
}
</style>