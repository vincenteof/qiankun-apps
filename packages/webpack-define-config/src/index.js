const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { merge } = require('webpack-merge')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const invariant = require('tiny-invariant')

function defineConfig(config = {}) {
  const packageName = config.packageName
  const title = config.title
  invariant(
    packageName && title,
    'Minimal config like `{ packageName,title }` should be provided!'
  )
  const entry = config.entry || './src/index'
  const devServer = config.devServer
  const context = config.context
  const outputDir = config.outputDir

  const isProd = process.env.NODE_ENV === 'production'

  const baseConfig = {
    context,
    entry: {
      main: entry,
    },
    output: {
      path: outputDir,
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
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-typescript',
                '@babel/preset-react',
              ],
              plugins: [
                !isProd && require.resolve('react-refresh/babel'),
              ].filter(Boolean),
            },
          },
        },
        // todo: css module
        {
          test: /\.css$/i,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'postcss-loader',
          ],
        },
        {
          test: /\.(ico|gif|png|jpg|jpeg|svg)$/i,
          type: 'asset',
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        title,
        template: './index.html',
      }),
    ],
  }

  const devConfig = merge(baseConfig, {
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
      hot: true,
      historyApiFallback: true,
      port: 8080,
      ...devServer,
    },
  })

  const prodConfig = merge(baseConfig, {
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

  return {
    dev: devConfig,
    prod: prodConfig,
  }
}

module.exports = {
  defineConfig,
}
