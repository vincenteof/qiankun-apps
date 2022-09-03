module.exports = (api) => {
  api.cache(true)
  return {
    plugins: [
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
    ],
    presets: ['@babel/preset-env', '@babel/preset-react'],
  }
}
