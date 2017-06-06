const path = require('path')
const BUILD_DIR = path.resolve(__dirname, './static')
const SOURCE_DIR = path.resolve(__dirname, './source')

const config = {
  entry: SOURCE_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
      }
    }]
  }
}

module.exports = config
