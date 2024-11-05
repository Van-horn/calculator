const path = require("path")
require("dotenv").config({ path: path.resolve(__dirname, "./.env") })
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = env => ({
   mode: env.mode ?? "development",
   entry: path.resolve(__dirname, "src", "index.js"),
   output: {
      filename: "[contenthash].js",
      path: path.resolve(__dirname, "docs"),
      clean: true,
   },
   resolve: {
      extensions: [".html", ".js"],
   },
   optimization: {
      minimize: true,
      usedExports: true,
   },

   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader",
            },
         },
      ],
   },

   plugins: [new HtmlWebpackPlugin({ template: path.resolve(__dirname, "public", "index.html") })],

   devtool: "inline-source-map",
   devServer: {
      compress: true,
      port: process.env.DEV_PORT,
      hot: true,
      open: true,
   },
})
