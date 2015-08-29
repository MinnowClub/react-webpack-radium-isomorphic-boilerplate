var WebpackNotifierPlugin = require('webpack-notifier');
var webpack = require('webpack');

module.exports = {
  context: __dirname + '/views/react/pages',
  entry: {
    index: "./index.jsx"
  },

  module: {
    preLoaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
    ],
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?optional[]=es7.decorators'],
      }
    ]
  },

  externals: {
    //don't bundle the 'react' npm package with our bundle.js
    //but get it from a global 'React' variable
    'react': 'React'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json']
  },

  output: {
    filename: '[name].js',
    path: __dirname + "/views",
  },

  plugins: [
    new WebpackNotifierPlugin({title: 'Webpack'})
  ],

  watch: true
}
