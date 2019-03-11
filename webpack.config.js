const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/
      // },
      { test: /\.(ts|tsx)$/, loader: "awesome-typescript-loader" },
      {
        test: /\.css$/,
        // include: path.join(__dirname, 'src/components'),
        include: path.join(__dirname, 'src'),
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'lib')
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
};