const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = (api) => {
  api.cache(true)
  return {
    plugins: [
      '@babel/plugin-proposal-nullish-coalescing-operator',
      '@babel/plugin-proposal-optional-chaining',
      isDevelopment && require.resolve('react-refresh/babel'),
    ].filter(Boolean),
    presets: [
      '@babel/preset-env',
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
  }
}
