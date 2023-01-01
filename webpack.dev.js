const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    open: true,
    port: 9090,
    client: {
      overlay: {
        errors: false,
        warnings: false,
      },
      logging: 'none',
    },
    compress: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
});
