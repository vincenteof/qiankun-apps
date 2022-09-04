const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    filename: 'scripts/[name].bundle.js',
    chunkFilename: 'scripts/[name].chunk.js',
  },
  devServer: {
    static: './dist',
    historyApiFallback: true,
  },
})
