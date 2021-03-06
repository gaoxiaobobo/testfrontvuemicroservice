const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: [
                'vue-loader'
            ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html'
        })
    ]
};