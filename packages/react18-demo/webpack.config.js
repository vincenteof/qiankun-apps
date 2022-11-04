const { defineConfig } = require('webpack-define-config')
const { merge } = require('webpack-merge')
const { ModuleFederationPlugin } = require('webpack').container
const pkgJson = require('./package.json')
const packageName = pkgJson.name
const deps = pkgJson.dependencies

const config = defineConfig({
  packageName,
  title: 'react18-demo',
  devServer: {
    port: 8083,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})

const isProd = process.env.NODE_ENV === 'production'

const mfConfig = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'react18_demo_host',
      remotes: {
        '@shared': 'shared_remote@http://localhost:8084/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: deps['react'],
        },
        'react-dom/client': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
  ],
}

module.exports = merge(isProd ? config.prod : config.dev, mfConfig)
