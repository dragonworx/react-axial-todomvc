module.exports = {
    entry: './js/main.jsx',
    output: {
      filename: 'build.js',
      path: __dirname + '/dist'
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          query: {
            presets: [
              'babel-preset-es2015',
              'babel-preset-stage-2',
              'babel-preset-react',
            ].map(require.resolve)
          }
        }
      ]
    },
    stats: {
      colors: true
    },
    devtool: 'source-map'
  };