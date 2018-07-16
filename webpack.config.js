const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
    entry: './script.js',
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'distribution'),
        filename: 'minify.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: [
                    { loader: 'css-loader', options: { minimize: true } }
                ]
                })
},
            {
                test: /\.(png|ttf)/,
                use: 'url-loader'
            }
        ]
    },
    watch: true,
    plugins: [
        new UglifyJsPlugin(),
        new ExtractTextPlugin("minify.css")
      ]
}