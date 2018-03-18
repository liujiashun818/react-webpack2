const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const autoprefixer = require('autoprefixer');
const website = { publicPath:'http://localhost:8080/' };

module.exports = {
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    path.resolve(__dirname, './src/index.js'), //指定入口文件，程序从这里开始编译,__dirname当前所在目录, ../表示上一级目录, ./同级目录
  ],
    output: {
    path: path.resolve(__dirname, './dist'), // 输出的路径
    filename: '[name]_[hash:8].js',  // 打包后文件
    publicPath: website.publicPath
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test:/\.(png|jpg|gif|jpeg)$/,
        use:[{
          loader:'url-loader',
          options:{
            limit:500000,
            outputPath:'images/'
          }
          }]
      },
      {
        enforce: "pre",
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },{
        test: /\.css$/,
        exclude: /^node_modules$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }],
      },
      {
        test: /\.less$/,
        exclude: /^node_modules$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader'
          },
            {
            loader: 'postcss-loader'
          },
            {
            loader: 'less-loader'
          }],
        })
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin("styles_[hash:8].css"),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.template.html'),
      inject: true
    }),
    new CleanWebpackPlugin(
      ['dist/main_*.js','dist/styles_*css','index.html'],　 //匹配删除的文件
      {
        root: __dirname,       　　　　　　　　　　//根目录
        verbose:  true,        　　　　　　　　　　//开启在控制台输出信息
        dry:      false        　　　　　　　　　　//启用删除文件
      }
    )
  ]
}