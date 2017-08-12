const path = require('path');
const nodeExternals = require('webpack-node-externals');
const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
  entry: {
    server: './server/server.ts',
    cluster: './server/cluster.ts'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  target: 'node',
   externals: [nodeExternals({
     whitelist: [
       /^@angular\/material/
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
  },
  plugins: [
		new CompressionPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js|html)$/,
			threshold: 10240,
			minRatio: 0.8
		})
	]
}