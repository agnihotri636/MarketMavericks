module.exports = {
    transpileDependencies: true,
    configureWebpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@vue/cli-plugin-babel/preset']
              }
            }
          }
        ]
      }
    }
  }