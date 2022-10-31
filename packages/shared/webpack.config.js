const { defineConfig } = require('webpack-define-config')
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

module.exports = isProd ? config.prod : config.dev
