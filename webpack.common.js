const path = require('path');
const { ProvidePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniSvgDataUri = require('mini-svg-data-uri');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.join(__dirname, 'dist'),
  assets: path.join(__dirname, 'src/assets'),
  public: path.join(__dirname, 'public'),
};

module.exports = {
  externals: {
    PATHS,
  },
  entry: {
    main: PATHS.src,
  },
  output: {
    path: PATHS.dist,
  },
  target: 'web',
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
      {
        test: /\.((c|sa|sc)ss)$/i,
        use: [
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: 'babel-loader',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              name: 'img/[folder]/[name].[hash:4].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 4 * 1024,
              generator: (content) => miniSvgDataUri(content.toString()),
              name: '[folder]/[name].[hash:4].[ext]',
            },
          },
          { loader: 'svgo-loader' },
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[folder]/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
    new HtmlWebpackPlugin({
      template: `${PATHS.src}/views/index.html`,
      inject: 'body',
      //error in prod :(
      // minify: false,
      favicon: `${PATHS.public}/bike.svg`,
    }),
  ],
};
