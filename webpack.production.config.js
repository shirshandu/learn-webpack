const path = require("path");
// const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    'hello-world': './src/hello-world.js',
    'car': './src/car.js'
  },
  output: {
    // filename: 'bundle.js',
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, "./dist"),
    publicPath: ""
  },
  mode: "production",
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 10000,
      automaticNameDelimiter: '_'
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
            plugins: ["transform-class-properties"]
          }
        }
      },
      {
        test: /\.hbs$/,
        use: [
          'handlebars-loader'
        ]
      }
    ]
  },
  plugins: [
    // new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(process.cwd(), 'build/**/*')
      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      chunks:['hello-world','vendors~car~hello-world'],
      title: 'Hello World',
      template: 'src/page-template.hbs',
      description: 'hello-world'
    }),
    new HtmlWebpackPlugin({
      filename: 'car.html',
      chunks:['car','vendors~car~hello-world'],
      title: 'Car',
      template: 'src/page-template.hbs',
      description: 'car'
    })
  ]
};
