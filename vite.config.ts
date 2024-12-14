import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

const resolve = (dir: string) => path.resolve(__dirname, '.', dir)

// https://vite.dev/config/
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            '@': resolve('src'), // 将 @ 映射到 src 目录
        }
    },
    server: {
        proxy: {
            // 代理所有请求
            '/': {
                target: 'http://localhost:9000/admin',  // 目标服务器的地址
                changeOrigin: true,               // 允许跨域
                rewrite: (path) => path,          // 不修改路径，直接代理
            },
        },
    },
})
