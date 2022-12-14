const { defineConfig } = require('webpack-define-config')
const packageName = require('./package.json').name

const config = defineConfig({
  packageName,
  title: 'Qiankun Playground',
})

const isProd = process.env.NODE_ENV === 'production'

module.exports = isProd ? config.prod : config.dev
