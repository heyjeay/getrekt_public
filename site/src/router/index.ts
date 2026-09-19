import type { RouteRecordRaw } from 'vue-router'
import SiteLayout from '@/layout/SiteLayout.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: SiteLayout,
    children: [
      { path: '', name: 'home', component: () => import('@/views/HomeView.vue') },
      { path: 'privacy', name: 'privacy', component: () => import('@/views/PrivacyView.vue') },
      { path: 'terms', name: 'terms', component: () => import('@/views/TermsView.vue') },
    ],
  },
]
