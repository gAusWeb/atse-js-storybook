const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const appDistPath = {
  atse_js: "atse-app",
  atse_ts: "atse-app-ts",
};

// update this to change the app path
const currentApp = appDistPath.atse_js;

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  entry: {
    atse: ["./src/js/index.js", "./src/scss/main.scss"],
  },
  output: {
    filename: "./js/[name]-js.bundle.js",
    path: path.resolve(__dirname, `./${currentApp}/public/assets/`),
    // clean: true,
  },
  watch: {
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000,
  },
});
