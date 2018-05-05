const path = require('path');
const CleanWebPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-maps',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new CleanWebPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "React Mixtape fkjds"
        })
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
