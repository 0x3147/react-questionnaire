const path = require('path')

const resolve = (dir) => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  },
  devServer: {
    port: 3147, // B 端，前端
    proxy: {
      '/api': 'http://localhost:3001'
    }
  }
}
