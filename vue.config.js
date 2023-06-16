const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const importLess = '@import "~@/styles/index.module.less";'
module.exports = defineConfig({
  transpileDependencies: true,
      pluginOptions: {
        'style-resources-loader': {
          'preProcessor': 'less',
          'patterns': [
            path.resolve(__dirname, '@/styles/*/*.less'),
          ]
        }
      },
  css: {
    loaderOptions: {
      less: {
        additionalData: importLess,
      }
    }
  },
  devServer: {
    hot: true
  },
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
    }
  },
  // publicPath: 'succulentum'
})
