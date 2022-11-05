import {defineConfig} from 'vite'
import {join} from "path";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": join(__dirname, "src")
        }
    },
    server: {
        port: 8080
    },
    preview: {
        port: 3030
    }
})
