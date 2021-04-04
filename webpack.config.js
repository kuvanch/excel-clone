const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname,'src'),
    entry: './index.js',
    mode: 'development',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.[hash].js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CleanWebpackPlugin(),
        new CopyPlugin({
            patterns: [{ 
                from:  path.resolve(__dirname,'src/favicon.ico'), 
                to: path.resolve(__dirname,'dist') 
                }],
        }),
    ]
}