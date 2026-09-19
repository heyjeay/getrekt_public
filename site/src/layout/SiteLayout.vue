<script setup lang="ts">
import { site } from '@/site'

const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="flex min-h-screen flex-col bg-[radial-gradient(ellipse_at_top,rgb(240_72_36/0.12),transparent_60%)]">
    <header class="mx-auto flex w-full max-w-5xl items-center gap-3 px-4 py-5 sm:px-6">
      <RouterLink to="/" class="flex items-center gap-2.5" aria-label="GetRekt home">
        <img :src="`${base}logo.png`" alt="" width="36" height="36" class="size-9 rounded-xl" />
        <span class="text-lg font-black tracking-tight">GET<span class="text-ember">REKT</span></span>
      </RouterLink>
      <nav class="ml-auto flex items-center gap-1 text-sm font-bold text-stone-400" aria-label="Site">
        <RouterLink to="/privacy" class="rounded-lg px-3 py-2 hover:text-white" active-class="text-white">Privacy</RouterLink>
        <RouterLink to="/terms" class="rounded-lg px-3 py-2 hover:text-white" active-class="text-white">Terms</RouterLink>
        <a :href="site.download" class="ml-1 rounded-xl bg-ember px-4 py-2 text-white shadow-[0_8px_24px_-8px_rgb(240_72_36/0.8)] hover:bg-ember-deep">
          Download
        </a>
      </nav>
    </header>

    <main class="mx-auto w-full max-w-5xl flex-1 px-4 pb-16 sm:px-6">
      <RouterView v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </RouterView>
    </main>

    <footer class="border-t border-white/[0.06]">
      <div class="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-2 px-4 py-6 text-sm text-stone-500 sm:px-6">
        <span>© 2026 GetRekt</span>
        <RouterLink to="/privacy" class="hover:text-white">Privacy policy</RouterLink>
        <RouterLink to="/terms" class="hover:text-white">Terms of service</RouterLink>
        <a :href="site.discord" class="hover:text-white">Discord</a>
        <a :href="site.repo" class="hover:text-white">GitHub</a>
        <a :href="`mailto:${site.email}`" class="hover:text-white">{{ site.email }}</a>
      </div>
    </footer>
  </div>
</template>
