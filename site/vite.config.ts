import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// Served by GitHub Pages at https://heyjeay.github.io/getrekt_public/. With a custom domain, set
// SITE_BASE=/ when building.
export default defineConfig({
  base: process.env.SITE_BASE ?? '/getrekt_public/',
  plugins: [vue(), tailwindcss()],
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  // Every page is pre-rendered to real HTML (privacy/index.html…), so reviewers and crawlers read
  // the full text without running any script.
  ssgOptions: { dirStyle: 'nested', formatting: 'none' },
})
