var path = require('path');

module.exports = {
    entry: './src/app',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["es2015", "react"]
                    }
                }
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '.build'),
        filename: 'bundle.js'
    }
}
