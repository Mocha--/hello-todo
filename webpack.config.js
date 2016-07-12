module.exports = {
    entry: './src/index.jsx',
    output: {
        path: './bundle',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: [
                    // 'es2016',
                    'es2015',
                    'react'
                ],
                plugins: [
                    'transform-class-properties'
                ]
            }
        }, {
            test: /\.styl$/,
            loaders: [
                'style-loader',
                'css-loader',
                // 'postcss-loader',
                'stylus-loader'
            ]
        }]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './bundle'
    }
};
