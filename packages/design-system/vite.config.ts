import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/postcss'

export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DesignSystem',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue', 'primevue'],
      output: {
        globals: {
          vue: 'Vue',
          primevue: 'PrimeVue'
        }
      }
    },
    cssCodeSplit: false
  }
})
