import { defineConfig } from 'vite'
import { createVuePlugin as vue } from 'vite-plugin-vue2'
import ViteComponents from 'vite-plugin-components'
import { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'
import { join } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({ transformer: 'vue2' }),
    WindiCSS({
      preflight: {
        enableAll: true,
      },
      onOptionsResolved: (options) => {
        options.scanOptions.extraTransformTargets.css.push(
          join(__dirname, 'excluded', 'included.css')
        )
      },
    }),
  ],
  resolve: {
    alias: {
      '@': `${resolve(__dirname, 'src')}`,
    },
  },
})
