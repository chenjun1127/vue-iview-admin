module.exports = {
  devServer: {
    port: 8190,
    host: '0.0.0.0',
    proxy: {
      '^/api': {
        target: 'http://192.168.4.189:8085/bigdata-ltyfk',
        // target: 'http://192.168.6.80:8080/bigdata',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    // 配置css模块
    loaderOptions: {
      // 向预处理器 Loader 传递配置选项
      less: {
        // 配置less（其他样式解析用法一致）
        javascriptEnabled: true // 设置为true
      }
    }
  },
  publicPath: './'
};
