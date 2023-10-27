const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  entry: {
    atse: ["./src/js/index_prod.js", "./src/scss/main.scss"],
  },
  output: {
    filename: "./js/[name]-js.bundle.js",
    path: path.resolve(__dirname, `./dist/`),
    clean: true,
  },
});
