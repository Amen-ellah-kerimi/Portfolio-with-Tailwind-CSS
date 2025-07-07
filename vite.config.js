import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'pages/Home.html'),
                about: resolve(__dirname, 'pages/About.html'),
                contacts: resolve(__dirname, 'pages/contacts.html'),
                projects: resolve(__dirname, 'pages/Projects.html'),
            },
        },
    },
})