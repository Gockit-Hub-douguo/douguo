const { resolve } = require('path')
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
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
    }
}