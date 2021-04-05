const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const isProd = process.env.NODE_ENV === 'production'
// const isDev = !isProd
// console.log(isProd);
// const filename = name => isProd ? `bundle.[hash].${name}` : `bundle.${name}`

module.exports = {
    context: path.resolve(__dirname,'src'),
    entry: './index.js',
    mode: 'development',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.[chunkhash].js'
    },
    resolve:{
        alias: {
            '@': path.resolve(__dirname,'src'),
            '@/core':path.resolve(__dirname,'src/core')
        },
        extensions: ['.js']     
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'bundle.[chunkhash].css'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [{ 
                from:  path.resolve(__dirname,'src/favicon.ico'), 
                to: path.resolve(__dirname,'dist') 
                }],
        }),
    ],
    module: {
        rules: [
          {
            test: /\.s[ac]ss$/i,
            use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader",
            ],
          },
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ],
      },
}