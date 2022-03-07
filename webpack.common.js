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
        archve: path.resolve(__dirname, 'config/archive.js'),
        product: path.resolve(__dirname, 'config/product.js'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Home',
            chunks: ['index'],
            template: path.resolve(__dirname, 'src/html/index.html'),
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Archive',
            chunks: ['archive'],
            template: path.resolve(__dirname, 'src/html/archive.html'),
            filename: 'archive.html',
        }),
        new HtmlWebpackPlugin({
            title: 'Producto',
            chunks: ['product'],
            template: path.resolve(__dirname, 'src/html/product.html'),
            filename: 'product.html',
        })
    ]
};