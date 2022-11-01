const { defineConfig } = require('webpack-define-config')
const { merge } = require('webpack-merge')
const { ModuleFederationPlugin } = require('webpack').container
const packageName = require('./package.json').name

const config = defineConfig({
  packageName,
  title: 'react18-app',
  devServer: {
    port: 8081,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})

const mfConfig = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'react18_app_host',
      remotes: {
        '@shared': 'shared_remote@http://localhost:8084/remoteEntry.js',
      },
      shared: ['react', 'react-dom/client', 'antd'],
    }),
  ],
}
const isProd = process.env.NODE_ENV === 'production'

module.exports = merge(isProd ? config.prod : config.dev, mfConfig)
