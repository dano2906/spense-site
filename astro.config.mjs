import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  integrations: [tailwind({
    configFile: './tailwind.config.cjs',
    applyBaseStyles: false
  })],
  experimental: {
    assets: true
  }
})
