import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  ],
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/assets/css/mixin.less";',
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#9a0000',//设置antd主题色
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': new URL('src', import.meta.url).pathname
    }
  },
  // server: {
  //   proxy: {
  //     // 使用 proxy 实例
  //     '/api': {
  //       target: 'https://jspro.rovertech.com.hk',
  //       changeOrigin: true,
  //     },
  //   },
  // },
  server: {
    port: 3000, // 开发环境启动的端口
    host: '0.0.0.0',
    open: true, // 项目启动时自动打开浏览器
    proxy: {
      '/api': {
        target: 'http:xxxxxx', // 当遇到 /api 路径时
        changeOrigin: true,  // 如果接口跨域，需要进行这个参数配置
        // 一般情况下，配置上面两个即可
        // secure: false,      // 如果是 https 接口，需要配置这个参数
        // rewrite: path => path.replace(/^\/api/, '') // 将 /api 重写为空
      }
    }
  }






  // base: './',
  // build: {
  //   outDir: '../www', // 设置打包后的文件路径为 dist 目录
  //   postcss: {
  //     plugins: [
  //       autoprefixer(),
  //       pxtorem({
  //         rootValue: 37.5,
  //         propList: ['*'],
  //         replace: true,
  //         // 该项仅在使用 Circle 组件时需要
  //         // 原因参见 https://github.com/youzan/vant/issues/1948
  //       }),
  //     ],
  //   },
  // },
})
