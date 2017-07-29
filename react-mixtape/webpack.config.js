var path = require('path');
var FlowtypePlugin = require("flowtype-loader/plugin");

module.exports = {
    entry: './src/app',
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
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015", "react"]
                    }
                },
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
