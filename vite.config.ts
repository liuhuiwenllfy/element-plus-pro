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
    base: '/preview', //指定相对路径
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
    }
})
