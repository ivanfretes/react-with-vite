import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
   base: 'https://ivanfretes.github.io/react-with-vite/',
   plugins: [react()]
})
