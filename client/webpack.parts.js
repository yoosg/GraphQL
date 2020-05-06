/** @brief DebServer Setting */
exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    historyApiFallback: true,
    stats: 'errors-only',
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    overlay: { errors: true, warnings: true },
  },
});

/** @brief Css Loader */
exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});

/** @brief Babel Loader */
exports.ladBabel = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include,
        exclude,
        use: ['babel-loader'],
      },
    ],
  },
});

/** @brief SourceMap Setting */
exports.generateSourceMaps = ({ type }) => ({
  devtool: type,
});
