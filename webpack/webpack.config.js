const webpack = require('webpack');
const path = require("path");

console.log("# __dirname : " + __dirname);
module.exports = {
    entry: [
        path.resolve(__dirname, '../src/index.js')

    ],

    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },

    resolve: {
        extensions: ['*', '.js', '.jsx']
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        hot: true
    }
};