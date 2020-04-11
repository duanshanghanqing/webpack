const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: {
        // 最终打包生成的【name】 --> vue
        // ['vu e'] --> 要打包的库是vue
        vue: ['vue'] // 用数组表示还有其他依赖vue包一起打入
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, '..', 'static', 'dll'),
        library: '[name]_[hash]', // 打包的库里面向外暴露出去的内容
    },
    plugins: [
        // 打包生成一个 manifest.json 文件 --> 提供和vue映射器
        new webpack.DllPlugin({
            name: '[name]_[hash]',
            path: resolve(__dirname, '..', 'static', 'dll', 'manifest.json')
        }),
    ]
}
