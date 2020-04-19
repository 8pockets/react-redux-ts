const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const OUTPUT_DIR = process.env.OUTPUT_DIR || 'webroot';

module.exports = {
  mode: 'production',
  devtool: 'hidden-source-map',
  module: {
    rules: [
      {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        // Specify enforce: 'pre' to apply the loader
        // before url-loader/svg-url-loader
        // and not duplicate it in rules with them
        enforce: 'pre',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([OUTPUT_DIR]),
    new webpack.HashedModuleIdsPlugin(),
    // TODO: it forces splitted bundles to single bundle
    // new webpack.optimize.AggressiveMergingPlugin()
  ],
};
