<template>
    <div class="wrap">
        <div class="content">
            <div class="type-tab">
                <div class="type-head">
                    <router-link to="/jx">精选</router-link>
                    <router-link to="/ijx">最新</router-link>
                    <router-link to="/cjcp">分类</router-link>
                    <a>食材</a>
                    <a>采单</a>
                </div>
            </div>
        </div>
        <caipurouteView></caipurouteView>
    </div>
</template>

<script> 
import caipurouteView from './caipurouteview'
export default {
    components: {
        caipurouteView
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
            margin: 0 40px 40px 0;
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
            }
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
.wrap {
    padding-top: 60px;
}
</style>
