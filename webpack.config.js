var webpack = require("webpack");
var path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin");

var BUILD_DIR = path.join(__dirname, "dist");
var APP_DIR = path.join(__dirname, "src");

const VENDOR_LIBS = ["react", "react-dom", "react-router-dom"];

var config = {
  entry: {
    bundle: APP_DIR + "/index.js",
    vendor: VENDOR_LIBS
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: "file-loader"
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  devServer: {
    contentBase: BUILD_DIR,
    compress: true
  },
  plugins: [
    new htmlWebpackPlugin({
      template: "index.html"
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

module.exports = config;
