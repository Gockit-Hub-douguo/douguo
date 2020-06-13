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
    }
}