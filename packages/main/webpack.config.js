const { defineConfig } = require('webpack-define-config')
const { merge } = require('webpack-merge')
const packageName = require('./package.json').name

const config = defineConfig({
  packageName,
  title: 'Qiankun Playground',
})

const extraConfig = {
  output: {
    publicPath: '/',
  },
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = merge(isProd ? config.prod : config.dev, extraConfig)
