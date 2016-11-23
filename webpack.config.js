var webpack = require("webpack");

module.exports = {
  entry: "js/script.js",
  resolve: {
    modulesDirectories: [
      "."
    ]
  },
  output: {
    publicPath: "js/",
    filename: "bundle.js"
  }
};