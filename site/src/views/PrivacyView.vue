<script setup lang="ts">
import { useHead } from '@unhead/vue'
import { site } from '@/site'

useHead({
  title: 'Privacy policy · GetRekt',
  meta: [{ name: 'description', content: 'How GetRekt handles your recordings, your connected YouTube, TikTok and Discord accounts, and your data.' }],
})
</script>

<template>
  <article class="mx-auto max-w-3xl py-10">
    <p class="text-xs font-extrabold tracking-[0.2em] text-ember-tint uppercase">Legal</p>
    <h1 class="mt-2 text-4xl font-black tracking-tight">Privacy policy</h1>
    <p class="mt-2 text-sm text-stone-500">Last updated {{ site.updated }}</p>

    <div class="prose-rekt mt-8">
      <p>
        GetRekt is a game recorder for Windows made by an independent developer (“we”). This policy explains what GetRekt does with
        your information. The short version: <strong>GetRekt runs on your computer, has no accounts and no servers of its own, and
        keeps your recordings and sign-ins on your PC.</strong> Information only leaves your computer when you use a feature that needs
        it, as described below.
      </p>

      <h2>What stays on your computer</h2>
      <ul>
        <li><strong>Recordings and clips</strong>, their thumbnails, edits, exports, captions and highlight markers, saved in your Videos folder (or the folder you choose).</li>
        <li><strong>Settings</strong>, including your hotkeys, capture choices and any Discord webhook links you add.</li>
        <li><strong>Sign-ins</strong> for connected YouTube and TikTok accounts, encrypted with Windows so only your Windows user can read them.</li>
        <li><strong>The app log</strong>, which records what GetRekt did and any errors (never your clips, passwords, sign-ins or anything you say).</li>
      </ul>
      <p>
        GetRekt records your screen, the game you choose and, if you turn it on, your microphone, only to make the clips you ask for.
        <strong>Captions and the “clip that” voice command are processed entirely on your computer</strong> with speech recognition that
        runs locally; your audio is not sent anywhere. The voice command keeps only the last phrase it heard, in memory, to show you in
        Settings, and forgets it when GetRekt closes.
      </p>
      <p>We do not collect analytics, show ads, use tracking cookies, or sell or rent anyone’s information.</p>

      <h2>When information leaves your computer</h2>

      <h3>Updates</h3>
      <p>
        GetRekt checks <a href="https://github.com">GitHub</a> for new versions about every 30 minutes and shows how many times it has
        been downloaded. These requests go to GitHub, which can see your IP address, as with visiting any website. See
        <a href="https://docs.github.com/site-policy/privacy-policies/github-general-privacy-statement">GitHub’s privacy statement</a>.
      </p>

      <h3>Caption and voice models</h3>
      <p>
        The first time you use captions or the voice command, GetRekt downloads the speech recognition model it needs from
        <a href="https://huggingface.co">Hugging Face</a>. Only the download request is sent; none of your audio or clips.
      </p>

      <h3>YouTube</h3>
      <p>
        If you connect YouTube in Settings → Social, you sign in on Google’s own page and approve two permissions. GetRekt uses them only
        for these purposes:
      </p>
      <ul>
        <li><strong>Manage your YouTube videos</strong> (<code>youtube.upload</code>): to upload a clip to your channel when you choose to post it (or when you have turned on Auto-post and picked YouTube), with the title, description, tags and visibility shown in GetRekt.</li>
        <li><strong>View your YouTube account</strong> (<code>youtube.readonly</code>): to read your channel’s name, so GetRekt can show which channel you are posting to, and to tell you if the Google account has no channel yet.</li>
      </ul>
      <p>
        GetRekt uses YouTube API Services. By connecting YouTube you agree to be bound by the
        <a href="https://www.youtube.com/t/terms">YouTube Terms of Service</a>, and Google’s handling of your data is described in the
        <a href="https://policies.google.com/privacy">Google Privacy Policy</a>. GetRekt does not read, store or share any other data from
        your Google account. The sign-in is stored encrypted on your computer and is sent only to Google. You can disconnect at any time in
        Settings → Social, which also revokes GetRekt’s access at Google, or remove GetRekt from your
        <a href="https://security.google.com/settings/security/permissions">Google account’s third-party access page</a>.
      </p>
      <p>
        GetRekt’s use and transfer of information received from Google APIs adheres to the
        <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the
        Limited Use requirements.
      </p>

      <h3>TikTok</h3>
      <p>If you connect TikTok in Settings → Social, you sign in on TikTok’s own page and approve these permissions:</p>
      <ul>
        <li><strong>Your basic profile info</strong> (<code>user.info.basic</code>): your display name, so GetRekt can show which account you are connected to.</li>
        <li><strong>Upload videos as drafts</strong> (<code>video.upload</code>): to send a clip to your TikTok inbox when you choose to, where you finish and post it in the TikTok app.</li>
        <li><strong>Post videos</strong> (<code>video.publish</code>): to post a clip to your profile when you choose to, with the caption, privacy, comment, Duet, Stitch and disclosure settings you pick in GetRekt.</li>
      </ul>
      <p>
        Before a direct post, GetRekt asks TikTok for your posting options (such as which privacy levels your account allows) and shows
        them to you. GetRekt does not read your videos, followers, messages or any other TikTok data. The sign-in is stored encrypted on
        your computer and is sent only to TikTok. You can disconnect at any time in Settings → Social, or remove GetRekt in the TikTok
        app under Settings and privacy → Security → Manage app permissions. See
        <a href="https://www.tiktok.com/legal/page/global/privacy-policy/en">TikTok’s privacy policy</a>.
      </p>

      <h3>Discord</h3>
      <ul>
        <li><strong>Posting to a channel:</strong> if you add a Discord channel’s webhook link, clips you choose to post (or auto-post) are sent to that channel with a short message. The link stays on your computer.</li>
        <li><strong>Discord status:</strong> if the Discord app is running, GetRekt can show the game you are clipping on your Discord profile, through the Discord app on your computer. You can turn this off in Settings → General.</li>
      </ul>
      <p>See <a href="https://discord.com/privacy">Discord’s privacy policy</a>.</p>

      <h3>Sharing with friends</h3>
      <p>
        If you turn on Sharing, your computer serves the clips you post to your feed, and the replies to them, directly to friends you
        add and to people you send a watch link to. There is no GetRekt server in between, so the people you share with can see your IP
        address, and GetRekt asks your router to open a port for this. Sharing is off until you turn it on, and turning it off stops it.
      </p>

      <h3>Support logs</h3>
      <p>
        The app log stays on your computer. If you use Export log in Settings → Support, GetRekt saves a copy to your Desktop; it is only
        shared if you choose to send it to us. It includes your GetRekt settings (without webhook links or sign-ins) and recent app events.
      </p>

      <h2>Keeping and deleting your information</h2>
      <p>
        Everything GetRekt stores is on your computer, and you control it. Delete clips in GetRekt (they go to the Recycle Bin), disconnect
        accounts in Settings → Social, and uninstall GetRekt to remove the app. Its settings, sign-ins and logs are in
        <code>%APPDATA%\gg.getrekt.app</code> and <code>%LOCALAPPDATA%\gg.getrekt.app</code>, which you can delete. Videos you posted to
        YouTube, TikTok or Discord are kept by those services under their own policies; delete them there.
      </p>
      <p>
        Because GetRekt has no servers, we do not hold your recordings, sign-ins or account data. If you send us a support log or email,
        we use it only to help you and delete it when we no longer need it.
      </p>

      <h2>Children</h2>
      <p>
        GetRekt is not directed to children under 13, and YouTube and TikTok require their users to be at least 13 (or older where local
        law requires). Don’t connect those accounts if you don’t meet their age requirements.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes, we will update the date at the top and mention it in the release notes of the next GetRekt version.
      </p>

      <h2>Contact</h2>
      <p>
        Questions or requests about your information: <a :href="`mailto:${site.email}`">{{ site.email }}</a>, or ask in our
        <a :href="site.discord">Discord</a>.
      </p>
    </div>
  </article>
</template>
