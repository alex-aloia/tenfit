'use strict';

const path              = require('path'),
      webpack           = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin');

const src  = path.join(__dirname, 'src'),
      dist = path.join(__dirname, 'dist');

// TODO: resolve vs join
// path      : path.resolve(__dirname, 'dist'),

module.exports = {
    devtool: 'source-map',

    entry: [
        'webpack-hot-middleware/client?reload=true',
        `${src}/index.js`
    ],

    output: {
        path      : dist,
        // path: path.join(__dirname, '/dist/'),
        filename  : '[name].js',
        publicPath: '/'
    },

    plugins: [
        //     new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title   : 'Development',
            filename: 'index.html',
            template: `${src}/index.hbs`,
            // inject: 'body',
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],

    module: {
        rules: [
            {
                test   : /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }, {
                test  : /\.json?$/,
                loader: 'json'
            },
            {
                test: /\.scss$/,
                use : [
                    {
                        loader: 'style-loader' // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader' // translates CSS into CommonJS
                    },
                    {
                        loader : 'sass-loader', // compiles Sass to CSS
                        options: {
                            includePaths: ['./node_modules']
                        }
                    }]
            }
        ]
    }
};