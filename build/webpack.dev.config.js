const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackbaseconfig = require('./webpack.base.config');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = merge(webpackbaseconfig, {
    devtool: 'source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: require('eslint-friendly-formatter'),
                    emitWarning: true
                }
            },
            // 编译模板中的样式
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
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
                    { loader: 'vue-style-loader' },
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
                    outputPath: 'img/',
                    name: '[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    outputPath: 'media/',
                    name: '[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    outputPath: 'font/',
                    name: '[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                ENV: '"development"'
            }
        })
    ]
});
