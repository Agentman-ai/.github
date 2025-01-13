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
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'chat-widget.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ChatWidget',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'this'
  },
}; 