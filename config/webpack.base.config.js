const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = {
    entry: {
        vendor: ["react", "react-dom", 'react-router-dom', 'redux', 'react-redux'],
        app: path.resolve(__dirname, '../src/index.js')
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].chunk.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                })
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new ExtractTextPlugin('style.css')
    ],

    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true
    }
};