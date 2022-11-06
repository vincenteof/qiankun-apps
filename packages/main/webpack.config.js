const { defineConfig } = require('webpack-define-config')
const { ModuleFederationPlugin } = require('webpack').container
const { merge } = require('webpack-merge')
const pkgJson = require('./package.json')
const packageName = pkgJson.name
const deps = pkgJson.dependencies

const config = defineConfig({
  packageName,
  title: 'Qiankun Playground',
  publicPath: '/',
})

const mfConfig = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'main',
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

const isProd = process.env.NODE_ENV === 'production'

module.exports = merge(isProd ? config.prod : config.dev, mfConfig)
