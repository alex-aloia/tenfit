const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

const src = path.join(__dirname, 'src'),
    dist = path.join(__dirname, 'dist');

module.exports = {
    // entry: {
    // app: './src/index.js'
    // main: './src/index.js'
    // },
    entry: './src/index.js',

    // devtool: 'inline-source-map',
    // devtool: 'source-map',
    devServer: {
        // publicPath: "/dist/"
        // only needed if serving static content, publicPath takes precedence???
        // contentBase: path.join(__dirname, './dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader", // compiles Sass to CSS
                        options: {
                            includePaths: ['./node_modules', './node_modules/grommet/node_modules']
                        }
                    }]
            },
            // {
            //     test: /(foundtion\.core)/,
            //     use: [
            //         {
            //             loader: 'exports?foundation=jQuery.fn.foundation'
            //         }
            //     ]
            //
            // }
        ]
    },
    plugins: [
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Development',
            // filename: './dist/index.html'
            template: `${src}/index.hbs`

        }),

        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery'
        // })
    ],
    // resolve: {
    //     extensions: ['.js', '.jsx'],
    //     alias: {
    //         foundation: 'foundation-sites/dist/js/foundation.js'
    //     }
    // },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};