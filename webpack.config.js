const path = require("path");
const HandlebarsPlugin = require("handlebars-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src/index.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
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
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, "public"),
    port: 9000,
    publicPath: "/dist/",
  },
  plugins: [
    new HandlebarsPlugin({
      entry: path.join(__dirname, "src/pages", "*.hbs"),
      output: path.join(__dirname, "public", "[name].html"),
      partials: [
       path.join(__dirname, "src/organisms", "*.hbs")
      ],
    }),
  ],
};
