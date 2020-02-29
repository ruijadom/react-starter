const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config');
const commonPaths = require('./paths');

module.exports = merge(webpackBaseConfig, {
  mode: 'development',
  entry: ['react-hot-loader/patch', commonPaths.entryPath],
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: commonPaths.outputPath
  },
  devtool: '#eval-source-map',
  devServer: {
    contentBase: commonPaths.assetsFolder,
    port: 3000,
    host: '0.0.0.0',
    historyApiFallback: true,
    hot: true
  }
});
