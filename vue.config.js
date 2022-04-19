const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
})

// 利用代理的模式 
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8082,

        // 代理 当你访问到/a接口 实际上底层帮你转发到了/b接口上    
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                // 是否将主机头的原点更改为目标的URL地址
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    }
}