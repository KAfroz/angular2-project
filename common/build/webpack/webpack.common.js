var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');
var glob = require('glob');

module.exports = {
    entry: {
        'polyfills': './common/archive/common/polyfills.ts',
        'vendor' : './common/archive/common/vendor.ts',
        'ref01': glob.sync('./src/app/src/*/*.component.ts'),
        'app' : './common/archive/common/module/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
        {
            test: /\.ts$/,
            loaders: ['awesome-typescript-loader', 'angular2-template-loader']
        },
        {
            test: /\.html$/,
            loader: 'html'
        },
        {
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            loader: 'file?name=assets/[name].[hash].[ext]'
        },
        {
            test: /\.css$/,
            exclude: helpers.root('common', 'archive'),
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
        },
        {
            test: /\.css$/,
            include: helpers.root('common', 'archive'),
            loader: 'raw'
        }
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'ref01', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: helpers.root('common', 'archive', 'common', 'module', 'index.html')
        })
    ]
};
