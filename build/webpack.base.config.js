const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: path.join(__dirname, '..', 'src', 'main.js'),
    output: {
        path: path.join(__dirname, '..', 'static'),
        publicPath: '/',
        filename: 'js/[name].[contenthash].js'
    },
    module: {
        rules: [
            // 编译.vue文件
            {
                test: /\.vue$/,
                loader: 'vue-loader' // 依赖 vue-template-compiler
            },
            // 编译js文件，配置.babelrc文件
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        // 开启多进程打包
                        // 进程启动大概为600ms，进程通信也有开销
                        // 只有工作消耗的时间比较长时，才需要多进程打包
                        loader: "thread-loader",
                    },
                    { 
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ],
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            }
        ]
    },
    // 还需要添加以下内容
    resolve: {
        alias: {
            //确定vue的构建版本
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['*', '.js', '.vue', '.json'],
        alias: {
            '@': resolve('src'),
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new VueLoaderPlugin()
    ]
};
