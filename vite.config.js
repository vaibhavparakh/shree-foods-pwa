import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'
import tailwindcssVite from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        vue(),
        tailwindcssVite(),
        VitePWA({
            registerType: 'autoUpdate',
            includeAssets: ['favicon.svg'],
            manifest: {
                name: 'Tiffin Pro',
                short_name: 'TiffinPro',
                theme_color: '#1d201f',
                background_color: '#fff',
                display: 'standalone',
                start_url: '/',
                icons: [
                    {
                        src: '/favicon.svg',
                        sizes: '192x192',
                        type: 'image/svg+xml'
                    }
                ]
            }
        })
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
})
