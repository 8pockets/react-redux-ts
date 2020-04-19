const webpack = require('webpack');
const OUTPUT_DIR = process.env.OUTPUT_DIR || 'dist';

module.exports = {
  watch: true,
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    host: '0.0.0.0',
    hot: true,
    port: process.env.WEBPACK_DEV_SERVER_PORT || 5544,
    inline: true,
    contentBase: OUTPUT_DIR,
    // to make dev server http2 compliant
    disableHostCheck: true,
  },
};
