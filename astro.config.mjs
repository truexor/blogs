import { defineConfig } from 'astro/config'
import { CDN_DOMAIN, DOMAIN_URL } from './src/data/vars'

export default defineConfig({
  output: "static",
  compressHTML: true,
  image: {
    domains: [CDN_DOMAIN]
  },
  site: DOMAIN_URL,
})