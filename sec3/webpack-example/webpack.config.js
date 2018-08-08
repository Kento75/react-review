module.exports = {
  // entryフィールド
  entry: './entry.js',

  // outputフィールド
  output: {
    filename: 'output.js',
  },

  module: {
    rules: [
      // babel-loaderの設定
      {
        loader: 'babel-loader',
        test: /\.js$/,
        options: {
          presets: ['react'],
        },
      },
    ],
  },
};