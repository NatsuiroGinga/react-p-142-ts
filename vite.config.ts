import {defineConfig} from 'vite'
import {join} from "path";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react()
    ],
    resolve: {
        alias: {
            // 为src目录设置别名
            "@": join(__dirname, "src")
        }
    },
    server: {
        // 生产环境的服务器端口
        port: 8888
    },
    preview: {
        // 预览本地构建的服务器端口
        port: 3000
    },
    build: {
        // 打包时最大块的大小
        chunkSizeWarningLimit: 1500,
        rollupOptions: {
            output: {
                // 分割大块为小块
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    }
})
