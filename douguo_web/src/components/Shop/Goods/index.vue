<template>
    <div>
        <div class="content">
            <div class="goods-info">
                <div class="goods-simg" style="overflow-y: hidden">
                    <div class="img-box img-border">
                        <img src="https://cp1.douguo.com/upload/tuan/a/a/9/448_aa8d00ce4df570c890ce3372fb721b09.jpg" alt="">111
                    </div>
                </div>
                <div class="goods-bimg">
                    <img src="https://cp1.douguo.com/upload/tuan/a/a/9/448_aa8d00ce4df570c890ce3372fb721b09.jpg" alt="">
                </div>
                <div class="info">
                    <h3 class="goods-name">贝贝南瓜净重5斤</h3>
                    <p class="description">宝宝辅食 粉香甜糯</p>
                    <div class="sell-info">
                        <span class="price">￥25.90</span>
                        <s class="old-price">￥45.00</s>
                        <div class="other">
                            <span>月售: 900件</span>
                            <span>发货地: 上海</span>
                        </div>
                    </div>
                    <div class="buymod">
                        <div style="display: inline-block;
                                float: left;
                                border: 1px solid #E5E3DF;
                                border-radius: 4px;
                                overflow: hidden;" class="buy-num">
                            <a class="buy-btn">-</a>
                            <input class="buy-input" readonly type="text" value="1">
                            <a class="buy-btn">+</a>
                        </div>
                        <a class="buy">立即购买</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.content {
    width: 1000px;
    margin: 0 auto;
    .goods-info {
        margin-top: 30px;
        padding-bottom: 40px;
        font-size: 0;
        .goods-bimg {
            position: relative;
            width: 320px;
            height: 320px;
            margin-right: 20px;
            background: #f4f4f4;
            border-radius: 6px;
            overflow: hidden;
            text-align: center;
            line-height: 320px;
            float: left;
        }
        .goods-info .info {
            width: 580px;
            height: 320px;
            vertical-align: top;
        }
        .img-border {
            border: 1px solid #FFB31A;
        }
        .info {
            width: 580px;
            height: 320px;
            vertical-align: top;
            .goods-name {
                height: 60px;
                font-size: 20px;
                font-weight: bold;
                line-height: 30px;
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                margin-top: 30px;
            }
            .description {
                margin-top: 12px;
                font-size: 15px;
                line-height: 27px;
                color: #999;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .buymod {
                position: relative;
                margin-top: 30px;
                .buy-num {
                    display: inline-block;
                    // float: left;
                    border: 1px solid #E5E3DF;
                    border-radius: 4px;
                    overflow: hidden;
                    .buy-btn {
                        display: inline-block;
                        width: 34px;
                        height: 34px;
                        text-align: center;
                        line-height: 32px;
                        vertical-align: top;
                        font-size: 15px;
                        background: #f8f8f8;
                        color: #FFB31A;
                    }
                    .buy-input {
                        display: inline-block;
                        width: 56px;
                        height: 34px;
                        line-height: 34px;
                        vertical-align: top;
                        font-size: 15px;
                        border-left: 1px solid #E5E3DF;
                        border-right: 1px solid #E5E3DF;
                        text-align: center;
                    }
                }
                .buy {
                        display: inline-block;
                        width: 80px;
                        border-radius: 4px;
                        background: #FFB31A;
                        color: #fff;
                        font-size: 15px;
                        line-height: 34px;
                        text-align: center;
                        height: 34px;
                        float: left;
                        margin-left: 30px;
                    }
            }
        }
        .goods-simg {
            width: 56px;
            height: 56px;
            margin-right: 10px;
            font-size: 0;
            vertical-align: top;
            overflow: hidden;
            float: left;
            .simg-box {
                width: 56px;
                height: 56px;
                background: #f4f4f4;
                margin-bottom: 10px;
                border-radius: 4px;
                overflow: hidden;
                line-height: 56px;
                text-align: center;
            }
        }
        .sell-info {
            width: 600px;
            margin-top: 30px;
            .price {
                display: inline-block;
                margin-right: 10px;
                font-size: 24px;
                line-height: 24px;
                color: #FF4C44;
            }
            .old-price {
                display: inline-block;
                font-size: 16px;
                line-height: 20px;
                color: #999;
                text-decoration: line-through;
            }
        }
        .other {
            margin-top: 15px;
            font-size: 14px;
            line-height: 14px;
            span {
                margin-right: 30px;
            }
        }
    }
}
s {
    text-decoration: line-through;
    text-decoration-line: line-through;
    text-decoration-style: initial;
    text-decoration-color: initial;
}
</style>
