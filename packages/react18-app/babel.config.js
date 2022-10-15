const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = (api) => {
  api.cache(true)
  return {
    presets: [
      '@babel/preset-env',
      '@babel/preset-typescript',
      '@babel/preset-react',
    ],
    plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(
      Boolean
    ),
  }
}
