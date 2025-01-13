const path = require('path');

module.exports = {
  entry: './assistantWidget/ChatWidget.ts',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        type: 'asset/source'
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'chat-widget.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'ChatWidget',
      type: 'umd',
      export: 'ChatWidget'
    },
    globalObject: 'this'
  },
}; 