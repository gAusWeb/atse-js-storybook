const webpack = require("webpack"); //to access built-in plugins
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const appDistPath = {
  atse_js: "atse-app",
  atse_ts: "atse-app-ts",
};

// update this to change the app path
const currentApp = appDistPath.atse_js;

module.exports = {
  // entry: {
  //   atse: ["./src/js/index.js", "./src/scss/main.scss"],
  //   // "atse-css": "./src/scss/main.scss",
  //   // print: "./src/print.js",
  //   // name: {
  //   //   "./assets/css/": "./src/scss/main.scss",
  //   // },
  // },
  //   resolve: {
  //     extensions: ["", ".js"],
  //   },
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
  module: {
    rules: [
      //   {
      //     test: /\.(sass|scss|less|css)$/,
      //     use: ["style-loader", "css-loader", "sass-loader"],
      //   },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        // a loader loads file with matching extension no matter
        // if it is listed in entry: or imported inside js
        test: /\.(sc|sa|c)ss/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        // include: [path.resolve(__dirname, "src")],
      },

      //   {
      //     test: /\.css$/,
      //     use: [
      //       {
      //         loader: MiniCssExtractPlugin.loader,
      //         options: {
      //           publicPath: "/assets/css/",
      //         },
      //       },
      //       "css-loader",
      //     ],
      //   },

      //     {
      //       test: /\.scss$/,
      //       exclude: /node_modules/,
      //       use: [
      //         {
      //           loader: "file-loader",
      //           options: { outputPath: "css/", name: "[name].min.css" },
      //         },
      //         "sass-loader",
      //       ],
      //     },
      //   {
      //     test: /\.scss$/,
      //     use: [
      //       {
      //         loader: MiniCssExtractPlugin.loader,
      //       },
      //       {
      //         // Interprets CSS
      //         loader: "css-loader",
      //         options: {
      //           importLoaders: 2,
      //         },
      //       },
      //       {
      //         loader: "sass-loader", // 将 Sass 编译成 CSS
      //       },
      //     ],
      //   },
    ],
  },
  plugins: [
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    // }),
    new MiniCssExtractPlugin({
      filename: "./css/[name]-css.min.css",

      //   chunkFilename: "[id].css",
      //   filename: "index.css",
      //   allChunks: true,
    }),

    new HtmlWebpackPlugin({
      title: "Output Management",
    }),
    new CopyPlugin({
      patterns: [{ from: "./src/assets", to: "./" }],
    }),
  ],
  optimization: {
    minimizer: [
      //   // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  },
  //   optimization: {
  //     minimizer: [
  //       new OptimizeCSSAssetsPlugin({
  //         cssProcessorOptions: {
  //           safe: true,
  //         },
  //       }),
  //     ],
  //   },
  devtool: "source-map",
  mode: "development",
};
