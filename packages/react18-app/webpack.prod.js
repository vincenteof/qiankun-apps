const { merge } = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'scripts/[name].[contenthash].bundle.js',
    chunkFilename: 'scripts/[name].[contenthash].chunk.js',
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: `styles/[name].[contenthash:8].css`,
      chunkFilename: `styles/[name].[contenthash:8].css`,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
  },
})
