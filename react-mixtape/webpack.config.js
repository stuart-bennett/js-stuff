var path = require('path');
var FlowtypePlugin = require("flowtype-loader/plugin");

module.exports = {
    entry: './src/start/app',
    resolve: {
        modules: [
            path.resolve(__dirname, "src"),
            "node_modules"
        ],
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: [
                { loader: 'babel-loader' },
                { loader: 'flowtype-loader' },
                { loader: 'eslint-loader' }
            ],
        }]
    },
    plugins: [
        new FlowtypePlugin()
    ],
    output: {
        path: path.resolve(__dirname, '.build'),
        filename: 'bundle.js'
    }
}
