const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const packageName = require('./package.json').name

module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    library: {
      name: `${packageName}`,
      type: 'umd',
    },
    chunkLoadingGlobal: `webpackJsonp_${packageName}`,
  },
  resolve: {
    alias: {
      '@src': path.resolve('./src'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react18-app',
      template: './index.html',
    }),
  ],
}
