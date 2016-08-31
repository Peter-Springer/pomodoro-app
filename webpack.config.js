const path = require('path');

module.exports = {
  entry: {
    main: './lib/index.js',
    test: 'mocha!./test/index.js'
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!resolve-url!sass?sourceMap' },
      {
          test: /\.png$/,
          loader: 'url-loader',
          query: { mimetype: 'image/png'}
      },
     { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015' }
    //  { test: /sinon\.js$/, loader: "imports?define=>false,require=>false"}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss', '.css']
  }
};
