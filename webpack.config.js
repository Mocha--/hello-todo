module.exports = {
    entry: './src/app.jsx',
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
                    'es2015',
                    'react'
                ]
            }
        }, {
            test: /\.styl$/,
            loaders: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'stylus-loader'
            ]
        }]
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './bundle'
    }
};
