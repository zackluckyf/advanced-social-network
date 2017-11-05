const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    server: './server/server.ts',
    cluster: './server/cluster.ts'
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  target: 'node',
    externals: [nodeExternals({
      whitelist: [
        /^@angular\/material/,
        /^@ng-bootstrap\/ng-bootstrap/,
        /^angular2\-toaster/,
      ]
    })],
  node: {
    __dirname: true
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]
  }
}