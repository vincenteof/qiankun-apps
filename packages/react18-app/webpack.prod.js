const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'scripts/[name].[contenthash].bundle.js',
    chunkFilename: 'scripts/[name].[contenthash].chunk.js',
  },
})
