import path from 'path';
import webpack from 'webpack'

export default {
  devtool: 'eval-sourve-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, '/client/index.js')
    ],
  output: {
    path: __dirname,
    filename:'bundle.js',
    publicPath:'/'
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: [ 'babel-loader' ]}]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
