const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const develop = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    main: './src/javascript/main.entry.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '/js/[name].js',
    publicPath: develop ? '' : '/seat-planner'
  },
  devtool: develop ? 'inline-source-map' : '',
  resolve: {
    alias: {
      sass: path.resolve(__dirname, './src/sass'),
      javascript: path.resolve(__dirname, './src/javascript'),
      pug: path.resolve(__dirname, './src/pug'),
      assets: path.resolve(__dirname, './src/assets'),
      project: path.resolve(__dirname)
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
        test: /\.json$/,
        loaders: ['json']
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
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
    new HtmlWebpackPlugin({
      title: 'Sitzplaner',
      template: './src/assets/templates/index.pug',
      baseurl: 'gh-pages'
    }),
    new CopyWebpackPlugin([
      {
        from: {
          glob: path.resolve(__dirname, './src/assets/static')
        },
        to: path.resolve(__dirname, 'dist')
      }
    ])
  ]
};
