import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/Portfolio-with-Tailwind-CSS/',
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'pages/index.html'),
                about: resolve(__dirname, 'pages/About.html'),
                contacts: resolve(__dirname, 'pages/contacts.html'),
                projects: resolve(__dirname, 'pages/Projects.html'),
            },
        },
    },
})