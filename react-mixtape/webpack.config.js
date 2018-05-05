const path = require('path');
const CleanWebPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-maps',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new CleanWebPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "React Mixtape fkjds"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
