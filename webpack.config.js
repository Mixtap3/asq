'use strict';
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [ // definiera main filen
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'client/main.jsx')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: 'main.js',
    publicPath: '/'
  },

plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        debug: true,
        sassLoader: {
          includePaths: ['node_modules'],
        }
//        postcss: [autoprefixer],
      }
    }),
    //new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
   // new webpack.NoErrorsPlugin(),
   // new webpack.DefinePlugin({
     // 'process.env.NODE_ENV': JSON.stringify('development')
   // })
    new CopyWebpackPlugin([
      { from: 'client/assets/index.html', to: 'index.html' },
      // { from: 'src/assets/favicon.ico', to: 'assets/favicon.ico' },
    ]),
    new ExtractTextPlugin("[name].css")
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.json?$/,
      loader: 'json-loader'
    },{
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
            // Optionally extract less files
            // or any other compile-to-css language
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!less-loader'})
    },
    {
      test: /\.(woff|png|jpg|gif)$/, 
      loader: 'url-loader?limit=10000' 
    },{
      test: /\.svg$/,
      loader: 'svg-loader?pngScale=2'     
    }
]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
};
