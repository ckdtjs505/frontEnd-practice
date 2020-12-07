const path = require("path");

module.exports = {
  mode: "development",
  entry: "./assets/js/main.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "static")
  },
  devtool: "inline-source-map"
};
