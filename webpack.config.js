const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const develop = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: './src/javascript/main.entry.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '/js/[name].js'
  },
  devtool: develop ? 'inline-source-map' : '',
  resolve: {
    alias: {
      sass: path.resolve(__dirname, './src/sass'),
      javascript: path.resolve(__dirname, './src/javascript'),
      pug: path.resolve(__dirname, './src/pug')
    }
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: [
          'style',
          `css${develop ? '?sourceMap' : ''}`,
          `sass${develop ? '?sourceMap' : ''}`
        ]
      },
      {
        test: /\.pug$/,
        loaders: ['pug']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src/sass')]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: {
          glob: path.resolve(__dirname, './src/assets/static')
        },
        to: path.resolve(__dirname, 'dist')
      },
      {
        from: {
          glob: path.resolve(__dirname, './src/assets/html')
        },
        to: path.resolve(__dirname, 'dist')
      }
    ])
  ]
};
