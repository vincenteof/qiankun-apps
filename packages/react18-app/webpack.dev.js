const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'scripts/[name].bundle.js',
    chunkFilename: 'scripts/[name].chunk.js',
  },
  plugins: [new ReactRefreshWebpackPlugin()],
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
