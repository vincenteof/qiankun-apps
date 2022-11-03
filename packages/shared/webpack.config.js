const { defineConfig } = require('webpack-define-config')
const { merge } = require('webpack-merge')
const { ModuleFederationPlugin } = require('webpack').container
const packageName = require('./package.json').name

const config = defineConfig({
  packageName,
  title: 'shared',
  devServer: {
    port: 8084,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})

const isProd = process.env.NODE_ENV === 'production'

const mfConfig = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shared_remote',
      // https://github.com/umijs/qiankun/issues/1148
      library: {
        type: 'window',
        name: 'shared_remote',
      },
      filename: 'remoteEntry.js',
      exposes: {
        './components/FramerPlayground': './src/components/FramerPlayground',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^18.2.0',
        },
        'react-dom/client': {
          singleton: true,
          requiredVersion: '^18.2.0',
        },
      },
    }),
  ],
}

module.exports = merge(isProd ? config.prod : config.dev, mfConfig)
