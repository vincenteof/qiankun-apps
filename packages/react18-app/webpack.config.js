const { defineConfig } = require('webpack-define-config')
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

const isProd = process.env.NODE_ENV === 'production'

module.exports = isProd ? config.prod : config.dev
