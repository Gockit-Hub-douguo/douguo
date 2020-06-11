const { resolve } = require('path')

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set('common', resolve(__dirname, 'src/componerts/common'))
      .set('comp', resolve(__dirname, 'src/componerts'))
      .set('css', resolve(__dirname, 'src/assets'))
      .set('public', resolve(__dirname, 'src/assets/public'))
  },
  devServer: {
    proxy: {
      '/api': {
        // 解决跨域 Access-Control-Allow-Origin
        target: 'https://www.skypixel.com/api',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
