const path = require('path');
const CleanWebPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new CleanWebPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "React Mixtape"
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
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        'react-hot-loader/babel',
                        'transform-object-rest-spread'
                    ],
                    presets: ['babel-preset-react']
                }
            },
            {
                test: /\.(js|jsx)$/,
                use: 'eslint-loader'
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
};
