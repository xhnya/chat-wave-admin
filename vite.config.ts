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
    }
})
