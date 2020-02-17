const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  // entry: "./src/index.js",
  entry: {
    'hello-world': './src/hello-world.js',
    'car': './src/car.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "./dist"),
    publicPath: ""
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    index: 'index.html',
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.css$/,
        use: ['style-loader', "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', "css-loader", "sass-loader"]
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
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        path.join(process.cwd(), 'build/**/*')
      ]
    }),
    new HtmlWebpackPlugin({
      filename: 'hello-world.html',
      chunks:['hello-world'],
      title: 'Learning Web Pack Finally',
      template: 'src/page-template.hbs',
      description: 'hello world'
    }),
    new HtmlWebpackPlugin({
      filename: 'car.html',
      chunks:['car'],
      title: 'Car',
      template: 'src/page-template.hbs',
      description: 'car'
    })
  ]
};
