const path = require('path')
module.exports = {
    pages: {
        index: {
            entry: 'examples/main.js', //入口
            template: 'public/index.html', // 模板
            filename: 'index.html' // 输出文件
        }
    },
    // 扩展 webpack 配置，使 packages 加入编译
    chainWebpack: config => {
        config.entry('app').clear().add('./examples/main.js')
        // @ 默认指向 src 目录，这里要改成 examples
        // 另外也可以新增一个 ~ 指向 packages
        config.resolve.alias
            .set('@', path.resolve('examples'))
            .set('~', path.resolve('packages'))
        // 把packages和examples加入编译，因为新增的文件默认是不被webpack处理的
        config.module
            .rule('js')
            .include.add(/packages/).end()
            .include.add(/examples/).end()
            .use('babel')
            .loader('babel-loader')
            .tap(options => {
                // 修改它的选项...
                return options
            })
        config.set('externals', {
            vue: 'Vue',
            'vue-router': 'VueRouter',
        })
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === 'production') {
            config.mode = 'production';
            // 打包文件大小配置
            config.performance = {
                maxEntrypointSize: 10000000,
                maxAssetSize: 30000000
            }

        }
    }

}