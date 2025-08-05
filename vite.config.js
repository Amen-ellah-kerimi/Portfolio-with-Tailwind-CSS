import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    base: '/Portfolio-with-Tailwind-CSS/',
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'About.html'),
                contacts: resolve(__dirname, 'contacts.html'),
                projects: resolve(__dirname, 'Projects.html'),
            },
        },
    },
})
