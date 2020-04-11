# webpack 性能优化
*    开发环境性能优化
*    生产环境性能优化

## 开发环境性能优化
*   优化打包构建速度
*   优化调试功能

> 热更新

    devServer: {
        port: 9000,
        contentBase: './static',
        hot: true, // 热更新, 只支持css文件
        historyApiFallback: true, // 解决f5刷新界面报404问题
        open: true,
        proxy: {
            "/pcapi": {
                target: "https://alph.laifuyun.com",
                secure: false,
                changeOrigin: true
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin() // 使用模块热替换插件(HotModuleReplacementPlugin)
    ]

> source-map
    内联和外部的区别：1.外部生成了的source-map文件内联没有 2.内联打包后source-map文件嵌套在js文件中，内联构建速度更快
    source-map：外部
        准确建立编译代码和源代码的映射关系，能够提醒保存信息和源始位置
    inline-source-map：内联
        只生成一个内联source-map，和source-map功能一致
    hidden-source-map：外部
        能提醒构建后错误信息位置，不能提醒到源代码位置
    eval-source-map：内联
        每一个文件都生成一个对应的source-map文件，准确建立编译代码和源代码的映射关系，能够提醒保存信息和源始位置，生成的文件多了哈希值
    nosources-source-map：外部
        能提醒构建后错误信息位置，没有源代码
    cheap-source-map：外部
        能提醒构建后错误信息位置，只精确到行
    cheap-module-source-map：外部
        能提醒构建后错误信息位置
        module会将loader的 source-map 信息加入

    开发环境
        速度快（eval->inline->cheap）
            eval-cheap-source-map
            eval-source-map
        调试友好
            source-map
            cheap-module-source-map
        ->  eval-source-map / eval-cheap-module-source-map

    生成环境：隐藏源代码
        内联代码体积会非常大，生成环境不用内联
        nosources-source-map：全部隐藏
        hidden-source-map：只隐藏源代码，会提醒构建后代码错误信息

## 生产环境性能优化
### 优化打包构建速度
#### 1.使用 oneOf，使loader处理时，而不是全部跑一遍

#### 2.多进程打包
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

    注意：项目比较大时，babel-loader干的活比较久，才用，因为进程启动，进程通信都特别消耗时间

#### 3.externals
    把公用的库不打包的项目里，采用cnd加载
    externals: {
        jquery: 'jQuery'
    }

    在html文件内通过cdn引入jquery

#### 4.dll
    把一些包单独打包，如jquery
    原理：第一次先把jquery单独打包
    第二次在打包项目的时候jquery就不会参与打包了，优化打包效率
    
### 优化代码运行性能
#### 1.缓存
        假如有100个模块，只变了其中一个，其他99个不变。开启babel缓存
        https://www.npmjs.com/package/babel-loader
        { 
            loader: 'babel-loader',
            options: {
                cacheDirectory: true
            }
        }

        hash:每次webpack构建时会生成一个唯一的hash值，不管文件有没有变化都生成一个
            问题：因为js和css问题使用一个hash值
            如果重新打包，会导致缓存失效（可能我却只改动了一个文件）
        chunkhash：根据chunk生成hash，如果打包来源于同一个chunk，值就一样
            问题：js和css的哈希值还是一样的
                因为css是在js中引入进的，属于一个chunk
        contenthash：是根据文件内容生成的hash只，不同文件hash值不同。只有文件变化了才生成新的hash值，充分利用缓存
        --> 让代码上线运行缓存更好使，充分利用缓存

#### 2.tree shaking
    去除无有用到代码
        前提：1.必须使用ES6模块
             2.开启production环境
        作用：减少代码体积

    在package.json中配置
        "sideEffects": false 所表示所有代码没有副作用（都可以tree shaking）
        问题：会把css干掉，有问题
        "sideEffects": ['*.css', '*.less']

#### 3.code split
    代码分割，按需加载
    使用 import(/* webpackChunkName: 'test' */'./xx.js').then(); 动态加载，会单独打包,并设置名称

#### 4.懒加载和预加载
    懒加载：文件需要用的时候才加载，不过会有延迟
    webpackPrefetch: 预加载，会在使用之提前加载，等其他资源加载完毕，浏览器空闲了在，在偷偷的加载资源。兼容性比较差，适合pc端
    document.getElementById('but').onclick = function() {
        import(/* webpackChunkName: 'test', webpackPrefetch: true */'./xx.js').then();
    }

#### 5.PWA
    PWA：渐进式网络开发应用程序（离线可访问）
    基于workbox实现，谷歌开源的东西
    在webpack中使用 workbox-webpack-plugin 实现
