const path = require('path');


module.exports = {
    devtool: 'source-map',
    entry: './main.jsx',
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react'],
                    plugins: ["transform-class-properties"],

                }
            },{
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000' }
        ]

    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: './bundle.js'
    },
    watch: true
};
