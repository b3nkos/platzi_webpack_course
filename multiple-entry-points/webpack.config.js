const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry: {
    home: path.resolve(__dirname, 'src/js/home.js'),
    prices: path.resolve(__dirname, 'src/js/prices.js'),
    contact: path.resolve(__dirname, 'src/js/contact.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "js/[name].js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/[name].css"
    })
  ]
};
