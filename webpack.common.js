const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            }
        ]
    },
    entry: {
        index: path.resolve(__dirname, 'config/index.js'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'IDC Ventures',
            chunks: ['index'],
            template: path.resolve(__dirname, 'src/html/index.html'),
            filename: 'index.html',
        })
    ]
};