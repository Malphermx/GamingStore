const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (env, {mode}) => {
  console.log({mode})

  const isProduction = mode === 'production'
  return {
    // entry: './src/index.js',
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'build')
    },
    plugins: [
      new HtmlWebpackPlugin({ template: 'src/index.html' })
    ],
    devServer: {
      open: true,
    //   overlay: true,
    //   compress: true,
      port: 8080,
    },
    module: {
      rules: [
        {
            test: /\.(css|sass|scss)$/,
            use: ['style-loader', 'css-loader','sass-loader']
        },
        {
            test: /\.(png|jpg|jpeg)$/,
            loader: 'file-loader',
            options: {
              outputPath: 'images',
            }
        }
      ]
    }
  }
}