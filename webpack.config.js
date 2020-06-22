const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserJSPlugin = require("terser-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: path.join(__dirname, "src", "mattsogreat.js"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "index.bundle.js"
  },
  mode: process.env.NODE_ENV || "development",
  devtool: "source-map",
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        // this is so that we can compile any React,
        // ES6 and above into normal ES5 syntax
        test: /\.(js|jsx)$/,
        // we do not want anything from node_modules to be compiled
        exclude: /node_modules/,
        use: ["react-hot-loader/webpack", "babel-loader"],
        resolve: { extensions: [".js", ".jsx"] }
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          'postcss-loader', // can be handy for browser support
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: require('sass'),
              sassOptions: {
                fiber: require('fibers'),
              },
            } // compiles Sass to CSS, using Node Sass by default
          }
        ]
      },
      {
        test: /\.svg$/,
        use: [
          "babel-loader",
          {
            loader: "react-svg-loader",
            options: {
              svgo: {
                plugins: [
                  { removeTitle: false }
                ],
                floatPrecision: 2
              }
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3)$/,
        loaders: ["file-loader"]
      }
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    splitChunks: {
      cacheGroups: {
        styles: {
          chunks: "all",
          enforce: true,
          name: "matty-styles",
          test: /\.css$/
        }
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html")
    })
  ]
};
