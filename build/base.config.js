// 公共配置
// mark: 导入node的path模块
const path = require('path')

// 从node_modules中找相关文件
const webpack = require('webpack')
// 此时要删除output中的publicPath属性，否则插入的script标签中的src可能有问题
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    // 入口： 可以是字符串/数组/对象
    entry: './src/main.js',
    // 出口：通常是一个对象，里面至少包含俩个重要属性，即path和filename
    
    output: {
        // mark: path通常是一个绝对路径，需要安装path包（package.json）
        // path: path.resolve(__dirname, 'dist'),
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        // mark: 此时不能显示图片的原因是图片的路径不正确
        // publicPath: 'dist/'
    },

    module: {
        rules: [
          // css-loader and style-loader
            {
              // 此为正则表达式
              test: /\.css$/,
              // 使用多个loader时，顺序从右向左
              use: ["style-loader", "css-loader"],
            },

            // less-loader
            {
              test: /\.less$/,
              use: [{
                // create style nodes from js strings
                loader: "style-loader",
              }, {
                // translate CSS into CommonJS
                loader: "css-loader",
              }, {
                // compiles Less to CSS
                loader: "less-loader",
              }
              ],
            },

            // url-loader
            {
              test: /\.(png|jpg|gif|jpeg)$/,
              use: [
                {
                  loader: 'url-loader',
                  options: {
                    // 当加载的图片小于limit时，会将图片编译成base64字符串形式；当加载的图片大于limit时，使用file-loader模块进行加载
                    limit: 8192,
                    name: 'img/[name].[hash:8].[ext]'
                  },
                },
              ],
            },

            // file-loader不需要额外配置

            // babel-loader
            {
              test: /\.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['es2015']
                }
              }
            },

            //vue-loader
            {
              test: /\.vue$/,
              use: ['vue-loader']
            }
          ],
    },

    resolve: {
      // alias: 别名
      alias: {
        // 此时有runtime-compiler
        'vue$': 'vue/dist/vue.esm.js'
      }
    },

    plugins: [
      new webpack.BannerPlugin('最终版权归loganjin所有'),
      new HtmlWebpackPlugin({
        template: 'index.html'
      }),
      // new UglifyJsPlugin(),
    ],
    // // webpack-dev-server
    // devServer: {
    //   contentBase: './dist',
    //   inline: true
    // }
}