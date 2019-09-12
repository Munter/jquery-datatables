const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    jquery: path.resolve(__dirname, './src/jquery.js'),
    datatables: path.resolve(__dirname, './src/datatables.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'demo',
      template: 'src/index.html'
    })
  ],

  module: {
    rules: [
      { parser: { amd: false } }
    ]
  }
}
