const { resolve } = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackbaseconfig = require('./webpack.base.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');// 独立打包css
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'); //压缩css
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin'); // 将某个文件打包输出去，并在html中自动引入该资源

module.exports = merge(webpackbaseconfig, {
    devtool: 'hidden-source-map',
    mode: 'production',
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.css$/,
                        use: [
                            { loader: MiniCssExtractPlugin.loader },
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            { loader: 'postcss-loader' }
                        ]
                    },
                    {
                        test: /\.less$/,
                        use: [
                            { loader: MiniCssExtractPlugin.loader },
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            { loader: 'postcss-loader' },
                            { loader: 'less-loader' }
                        ]
                    },
                    {
                        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            outputPath: 'img/',
                            name: '[name].[contenthash:7].[ext]'
                        }
                    },
                    {
                        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            outputPath: 'media/',
                            name: '[name].[contenthash:7].[ext]'
                        }
                    },
                    {
                        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            outputPath: 'font/',
                            name: '[name].[contenthash:7].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: 'css/[name]-[contenthash].css',
            chunkFilename: 'css/[id]-[contenthash].css'
        }),
        new OptimizeCssAssetsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                ENV: '"production"'
            }
        }),

        // 告诉webpack哪些库不参与打包，使用时名称也得变
        new webpack.DllReferencePlugin({
            manifest: resolve(__dirname, '..', 'static', 'dll', 'manifest.json')
        }),
        // 将某个文件打包输出去，并在html中自动引入该资源
        new AddAssetHtmlPlugin({ filepath: resolve(__dirname, '..', 'static', 'dll', 'vue.js') })
    ],
    // 将node_modules中的代码单独打包一个chunk输出
    // 自动分析多入口chunk中有没有公共的文件，如果有会打包成一个单独的chunk
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
});
