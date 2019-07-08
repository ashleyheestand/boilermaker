module.exports = {
  entry: ['babel-polyfill', './client/index'], // assumes your entry point is the index.js in the root of your project folder
  output: {
    path: __dirname, // assumes your bundle.js will also be in the root of your project folder
    filename: './public/bundle.js',
  },
  mode: 'development',
  devtool: 'source-maps',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolve(__dirname, './client'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
