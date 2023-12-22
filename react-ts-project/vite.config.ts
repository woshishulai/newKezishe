import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    css: {
        preprocessorOptions: {
            less: {
                additionalData: '@import "./src/assets/css/mixin.less";',
                javascriptEnabled: true,
                modifyVars: {
                    '@primary-color': '#9a0000' //设置antd主题色
                }
            }
        }
    },
    resolve: {
        alias: {
            '@': new URL('src', import.meta.url).pathname
        }
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://apikzs.ssssc798.com',
                changeOrigin: true,
                // secure:true,//是否https接口
                // ws:true,//是否代理websockets
                rewrite: (path) => path.replace(/^\/api/, '')
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
});
