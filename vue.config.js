const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  devServer: {
    overlay: {
        warnings: true,
        errors: true
    }
  },
  chainWebpack: config => {
    if (true) {
      config.plugin('html')
      .tap(args => {
        args[0].title = 'yy聊天室'
        if (process.env.npm_lifecycle_event !== 'serve') {
          args[0].cdnvue = '<script src="https://cdn.bootcss.com/vue/2.6.3/vue.runtime.min.js"></script>'
          args[0].cdnrouter = '<script src="https://cdn.bootcss.com/vue-router/3.0.2/vue-router.min.js"></script>'
        }
        return args
      })
    }
  },
  configureWebpack: config => {
    if (process.env.npm_lifecycle_event !== 'serve') {
      config.externals = {
        'vue': 'Vue',
        'vue-router': 'VueRouter'
      }
    }
    if (process.env.npm_lifecycle_event === 'build2') {
      return {
        plugins: [
          new BundleAnalyzerPlugin()
        ]
      }
    }
  },
  productionSourceMap: false
}
