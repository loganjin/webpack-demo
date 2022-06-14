// 开发配置
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')
module.exports = webpackMerge(baseConfig, {
  // webpack-dev-server
  devServer: {
    contentBase: './dist',
    inline: true
  }
})