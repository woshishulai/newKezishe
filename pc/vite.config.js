import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(),
  Components({
    resolvers: [
      AntDesignVueResolver({
        importStyle: false, // css in js
      }),
    ],
  }),],
  // build: {
  //   outDir: 'http',
  // },
  resolve: {
    alias: {
      '@': new URL('src', import.meta.url).pathname
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: '@import "./src/assets/css/mixin.less";',
        javascriptEnabled: true,
        modifyVars: {
          '@primary-color': '#034078',
          '@link-color': '#034078',
        },
      },
    },
  },
})
