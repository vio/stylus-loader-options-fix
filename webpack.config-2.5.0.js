const { resolve } = require('path')

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'stylus-loader',
                        query: {
                            paths: [
                                'src/common/css',
                                'src/common/img'
                            ]
                        }
                    }
                ]
            }
        ]
    }
}
