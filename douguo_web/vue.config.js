const { resolve } = require('path')
module.exports = {
    // 
    // publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.85.248:3000/',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    chainWebpack: (config) => {
        config.resolve.alias.set('bk', resolve(__dirname, 'src/backstoreView/views'))
        .set('css',resolve(__dirname,'src/assets/css'))
        .set('img',resolve(__dirname,'src/assets/img'))
        .set('comp',resolve(__dirname,'src/components'))
        .set('privatecss', resolve(__dirname, 'src/privatecss'))
        .set('ax', resolve(__dirname, 'src/axios/getdatas'))
        }
}