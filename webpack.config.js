module.exports = {
  entry: "./alfance.github.io/app/App.js",
  output: {
    filename: "alfance.github.io/dist/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
           presets: ['react', 'es2015', 'stage-0'],
            plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      }
    ]
  }
}
