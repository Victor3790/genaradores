const { merge } = require('webpack-merge');
const common = require( './webpack.common.js' );

const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;

module.exports = merge( common, {
    mode: 'production',
    output: {
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ]
});