const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap:false,
  transpileDependencies: true,
  lintOnSave:false,
  //代理跨域
  devServer:{
    proxy: {
      // 只要请求路径中存在/api
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn'
      },
    },
  }
})
