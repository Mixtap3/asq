'use strict';
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: {main: [ // definiera main filen
      'webpack-hot-middleware/client?reload=true',
      path.join(__dirname, 'client/main.jsx')
    ],
    jquery: "./server/views/js/jquery.js",
    bootstrap: "./server/views/js/bootstrap.js",
    bootstrapMin: "./server/views/js/bootstrap.min.js"
  },

  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
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
    new ExtractTextPlugin("[name].css"),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendors', filename: 'vendors.js'}),
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            'window.jQuery': 'jquery'
        })
  ],

  module: {
    loaders: [
      { test: path.join(__dirname, 'client', 'assets', 'js'), 
        loader: 'imports?jQuery=jquery' },{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.json?$/,
      loader: 'json-loader'
    },{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({loader: 'css-loader', fallback: 'style-loader'})
    },
            // Optionally extract less files
            // or any other compile-to-css language
    {
      test: /\.(woff|woff2|eot|ttf|png|jpg|gif)$/, 
      loader: 'url-loader?limit=10000' 
    },{
      test: /\.svg$/,
      loader: 'svg-loader?pngScale=2'     
    }
]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    modules: [path.join(__dirname, 'server', 'views', 'js'), "node_modules"]
  }
};
