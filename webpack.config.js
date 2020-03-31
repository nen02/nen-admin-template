const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        app: './web-template/js/app.js'
    },
    output: {
        // path: path.resolve(__dirname, 'build'),
        path: path.resolve(__dirname, './web-template/js'),
        filename: 'nen.bundle.js'
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            useBuiltIns: "usage", // or "entry"
                            corejs: 3,
                        }]
                    ]
                }
            }
        }]
    }
}