module.exports = {
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-sprite-loader',
          options: {
            symbolId: 'icon-[name]'
          }
        }
      ]
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .test(() => false)
      .use('file-loader')
  }
}
