const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
      index: './src/index.js',
      menu: './src/js/menu.js',
      contact: './src/js/contact.js',
  },
  output: {
    // filename: 'main.js',
    // filename: 'bundle.js',
    filename: 'index.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};