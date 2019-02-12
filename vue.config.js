const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  devServer: {
    overlay: {
        warnings: true,
        errors: true
    }
  },
  configureWebpack: config => {
    if (process.env.npm_lifecycle_event === 'build2') {
      return {
        plugins: [
          new BundleAnalyzerPlugin()
        ]
      }
    }
  }
}
