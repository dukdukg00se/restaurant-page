const path = require('path');

module.exports = {
  mode: 'development',

  entry: './src/index.js',
  // image url doesn't work when using source-map
  // https://stackoverflow.com/questions/37288886/webpack-background-images-not-loading
  // devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    // remove dist dir of unused files 
    // but in this case also removed index.html from dist
    // clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
     },
    ],
  },
};

