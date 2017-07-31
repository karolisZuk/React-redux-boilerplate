import path from 'path';

export default {
  devtool: 'eval-sourve-map',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: '/'
  },
  module: {
    loaders: [{test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: [ 'babel-loader' ]}]
  },
  resolve: {
    extensions: ['', '.js']
  }
}
