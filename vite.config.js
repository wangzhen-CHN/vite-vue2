import { createVuePlugin } from 'vite-plugin-vue2'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 4000
  },
  plugins: [createVuePlugin({ jsx: true })]
})
