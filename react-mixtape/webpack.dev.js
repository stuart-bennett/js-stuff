const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-maps',
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    }
});
