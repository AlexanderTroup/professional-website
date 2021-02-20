const path = require("path");
const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "docs"),
    publicPath: "/docs/",
    assetModuleFilename: "images/[name][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: "asset/resource",
        // generator: {
        //   filename: "images/[name][ext][query]",
        // },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "docs"),
    port: 9000,
  },
  plugins: [
    new HandlebarsPlugin({
      entry: path.join(__dirname, "src/pages", "*.hbs"),
      output: path.join(__dirname, "docs", "[name].html"),
      partials: [path.join(__dirname, "src/organisms", "*.hbs")],
    }),
  ],
};
