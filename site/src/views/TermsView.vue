<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { site } from '@/site'

useHead({
  title: 'Terms of service · GetRekt',
  meta: [{ name: 'description', content: 'The terms for using GetRekt, the game recorder for Windows.' }],
})
</script>

<template>
  <article class="mx-auto max-w-3xl py-10">
    <p class="text-xs font-extrabold tracking-[0.2em] text-ember-tint uppercase">Legal</p>
    <h1 class="mt-2 text-4xl font-black tracking-tight">Terms of service</h1>
    <p class="mt-2 text-sm text-stone-500">Last updated {{ site.updated }}</p>

    <div class="prose-rekt mt-8">
      <p>
        These terms apply when you download or use GetRekt, the game recorder for Windows made by an independent developer (“we”). By
        using GetRekt you agree to them. If you don’t agree, don’t use GetRekt.
      </p>

      <h2>Using GetRekt</h2>
      <ul>
        <li>GetRekt is free to use. We give you a personal, non-exclusive, non-transferable licence to install and use it on your own computers.</li>
        <li>Don’t resell GetRekt, remove its notices, or use it to break the law or anyone else’s rights.</li>
        <li>GetRekt is currently in testing. Features may change, be removed or not work perfectly, and updates install through the app.</li>
      </ul>

      <h2>Your content</h2>
      <p>
        Your recordings and clips are yours. GetRekt makes them on your computer and doesn’t claim any rights to them. You are responsible
        for what you record and post, including having the right to share it (for example, game footage, music and other people’s voices),
        and for following the rules of the games you play.
      </p>

      <h2>Posting to YouTube, TikTok and Discord</h2>
      <p>
        When you connect an account and post, you are using that service, and its terms apply to what you post:
        <a href="https://www.youtube.com/t/terms">YouTube Terms of Service</a>,
        <a href="https://www.tiktok.com/legal/page/global/terms-of-service/en">TikTok Terms of Service</a> (including its
        <a href="https://www.tiktok.com/legal/page/global/music-usage-confirmation/en">Music Usage Confirmation</a> and, for branded content,
        its <a href="https://www.tiktok.com/legal/page/global/bc-policy/en">Branded Content Policy</a>), and
        <a href="https://discord.com/terms">Discord’s Terms of Service</a>. GetRekt only posts what you choose to post, or what Auto-post
        sends after you turn it on, pick where it posts and let its 5-second countdown finish. Check your posts and settings on each
        service; we can’t edit or delete posts for you.
      </p>
      <p>
        How GetRekt handles your connected accounts is explained in the <RouterLink to="/privacy">privacy policy</RouterLink>.
      </p>

      <h2>No warranty</h2>
      <p>
        GetRekt is provided “as is” and “as available”, without warranties of any kind, express or implied, including that it will be
        error-free, uninterrupted, or fit for a particular purpose. Keep copies of clips that matter to you: recordings can fail, and
        files can be lost.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent the law allows, we are not liable for any indirect, incidental, special or consequential damages, or for lost
        data, recordings, accounts or profits, arising from your use of GetRekt. Nothing in these terms limits liability that cannot be
        limited by law, or your rights as a consumer.
      </p>

      <h2>Stopping</h2>
      <p>
        You can stop using GetRekt at any time by uninstalling it and disconnecting your accounts. We may stop offering GetRekt or any
        feature of it.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms. When we do, we will change the date at the top and mention it in the release notes. Using GetRekt after
        a change means you accept the new terms.
      </p>

      <h2>Contact</h2>
      <p>
        <a :href="`mailto:${site.email}`">{{ site.email }}</a>, or ask in our <a :href="site.discord">Discord</a>.
      </p>
    </div>
  </article>
</template>
