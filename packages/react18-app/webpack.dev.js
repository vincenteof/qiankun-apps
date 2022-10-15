const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const packageName = require('./package.json').name

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'scripts/[name].bundle.js',
    chunkFilename: 'scripts/[name].chunk.js',
  },
  // 加上 `library` 是为了在微前端环境下区分多个 refresh runtime 实例
  plugins: [new ReactRefreshWebpackPlugin({ library: packageName })],
  devServer: {
    static: './dist',
    port: 8081,
    hot: true,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
