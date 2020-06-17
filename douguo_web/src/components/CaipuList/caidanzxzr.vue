<template>
    <div class="content">
        <div id="zxzr">
        <div class="new-hot">
            <router-link class="active" to="/caidanzxzr">最新</router-link>
            |
            <router-link to="/zuir">最热</router-link>
        </div>
        <router-view></router-view>
    </div>
    </div>
</template>

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
        }
    }
</style>
