const { defineConfig } = require("@vue/cli-service");
const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  // 部署应用包时的基本 URL
  publicPath: "./",
  // 项目打包输出目录
  outputDir: "dist",
  // 项目静态文件打包输出目录
  assetsDir: "static",
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效
  // lintOnSave: process.env.NODE_ENV === "development",
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    port: 4455,
    https: false,
    // 配置代理，解决跨域问题
    // proxy: {
    //   [process.env.VUE_APP_BASE_API]: {
    //     // 测试环境
    //     target: "http://x.x.x.x:xxxx",
    //     changeOrigin: true,
    //     ws: false,
    //     pathRewrite: {
    //       ["^" + process.env.VUE_APP_BASE_API]: ""
    //     }
    //   }
    // }
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-pxtorem')({
              rootValue({ file }) {
                return file.indexOf('vant') !== -1 ? 37.5 : 75;
              },
              propList: ['*']
            })
          ]
        }
        // rootValue根据设计稿宽度除以10进行设置，这边假设设计稿为750，即rootValue设为75；
        // file.indexOf('vant') !== -1 vant保持375的设计稿
        // propList是设置需要转换的属性，这边*为所有都进行转换。
      }
    }
  },
  configureWebpack: {
    resolve: {
      // 配置快捷路径
      alias: {
        '@': resolve('src')
      }
    }
  }
});
