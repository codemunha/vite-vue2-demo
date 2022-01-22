import { defineConfig } from 'vite'
import { createVuePlugin as vue } from 'vite-plugin-vue2'
import ViteComponents from 'vite-plugin-components'
import { resolve } from 'path'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify } from 'unocss'
import presetIcons from '@unocss/preset-icons'
import presetMini from '@unocss/preset-mini'
import presetWind from '@unocss/preset-wind'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ViteComponents({ transformer: 'vue2' }),
    Unocss({
      presets: [
        presetAttributify({}),
        presetUno(),
        presetIcons(),
        presetMini(),
        presetWind(),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': `${resolve(__dirname, 'src')}`,
    },
  },
})
