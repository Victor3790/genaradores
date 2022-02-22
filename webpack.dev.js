const { merge } = require('webpack-merge');
const common = require( './webpack.common.js' );

module.exports = merge( common, {
    mode: 'development',
    target: 'web',
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
            }
        ]
    }
});