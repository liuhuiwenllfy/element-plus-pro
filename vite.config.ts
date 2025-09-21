import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/', //指定相对路径
    build: {
        outDir: 'dist' //指定输出路径
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@use "@/assets/css/global.scss" as *;',
            }
        }
    },
    server: {
        proxy: {
            "/single-admin": {
                target: "https://www.liulingfengyu.cn",
                changeOrigin: true,
            },
        },
    }
})
