const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        vendor: ["react-hot-loader/patch", "react", "react-dom", 'react-router-dom', 'redux', 'react-redux'],
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
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        plugins: [
                            'react-hot-loader/babel'
                        ]
                    }
                },
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css',
        })
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                }
            }
        }
    },

    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true
    }
};