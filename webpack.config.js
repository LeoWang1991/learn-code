const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const NodemonPlugin = require('nodemon-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './react-demo/src/index.js',
  output: {
    path: path.resolve(__dirname, 'react-demo/dist'),
    filename: 'main.bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'react-demo/public/index.html')
    }),
    // new NodemonPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'react-demo/src/')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },    
      {
        test: /\.(css|less)$/,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            modules: {
              localIdentName: "[path][name]__[local]--[hash:base64:5]",
            }
          }
        }, 'less-loader']
      },      
    ]
  },
  devServer: {
    port: 8002,
    contentBase: path.join(__dirname, 'react-demo/public'),
    
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}
