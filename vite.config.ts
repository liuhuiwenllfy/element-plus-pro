import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

// @ts-ignore
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: '/', //指定相对路径
    build: {
        outDir: 'vite' //指定输出路径
    },
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        Icons({compiler: 'vue3', autoInstall: true})
    ],
    resolve: {
        alias: {
            // @ts-ignore
            '@': path.resolve(__dirname, './src'),
            'vue-i18n': 'vue-i18n/dist/vue-i18n.cjs.js',
        }
    },
    css: {
        preprocessorOptions: {
            less: {
                additionalData: `@import "${path.resolve('src/assets/css/global.less')}";`,
                javascriptEnabled: true,
            }
        }
    },

    server: {
        proxy: {
            "/admin": {
                target: "http://localhost:8000",
                // target: "https://www.liulingfengyu.cn",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/admin/, ""),
            },
            "/advertise": {
                target: "http://localhost:8001",
                // target: "https://www.liulingfengyu.cn",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/advertise/, ""),
            },
            "/log": {
                target: "http://localhost:8002",
                // target: "https://www.liulingfengyu.cn",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/log/, ""),
            },
            "/operations": {
                target: "http://localhost:8003",
                // target: "https://www.liulingfengyu.cn",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/operations/, ""),
            },
            "/pluginMarket": {
                target: "http://localhost:8004",
                // target: "https://www.liulingfengyu.cn",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/pluginMarket/, ""),
            },
            "/scheduledTask": {
                target: "http://localhost:8006",
                // target: "https://www.liulingfengyu.cn",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/scheduledTask/, ""),
            },
            "/thirdParty": {
                target: "http://localhost:8007",
                // target: "https://www.liulingfengyu.cn",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/thirdParty/, ""),
            },
            "/upload": {
                target: "http://localhost:8008",
                // target: "https://www.liulingfengyu.cn",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/upload/, ""),
            },
        },
    }
})
