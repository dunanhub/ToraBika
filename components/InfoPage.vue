<script setup lang="ts">
const NAME   = 'Ubniyev Sultan'
const TITLE  = 'CEO "StudyOn"'
const EMAIL  = 'sulaubniyev11@gmail.com'
const INSTA  = 'https://instagram.com/sultanubniyev'
const WHATS  = 'https://wa.me/77027314000?text=Hello%20Sultan!' // международный формат
</script>

<template>
  <main class="card-page" role="main">
    <section class="hero">
      <div class="logo" aria-hidden="true">
        <img src="../public/person.jpg" alt="person image">
      </div>
      <h1 class="name">{{ NAME }}</h1>
      <img src="../public/logo(studyon).png" alt="Company Logo" style="width: min(150px, 30vw); height: auto; margin-top: 10px;">
      <p class="subtitle">{{ TITLE }}</p>
    </section>

    <nav class="actions" aria-label="Действия">
      <!-- 1) vCard -->
      <a class="btn" href="/contact.vcf" download aria-label="Добавить контакт">
        <span class="ico" aria-hidden="true">
          <!-- контакты -->
          <svg viewBox="0 0 24 24"><path d="M4 3h12a2 2 0 0 1 2 2v2H6a3 3 0 0 0-3 3v7a2 2 0 0 0 2 2h13v-2H5v-7a1 1 0 0 1 1-1h13V5a4 4 0 0 0-4-4H4z"/><path d="M18 13h-2v-2h-2v2h-2v2h2v2h2v-2h2z"/></svg>
        </span>
        <span>Добавить контакт</span>
      </a>

      <!-- 2) email -->
      <a class="btn" :href="`mailto:${EMAIL}?subject=Hello`" aria-label="Написать email">
        <span class="ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5"/></svg>
        </span>
        <span>Email</span>
      </a>

      <!-- 3) Instagram -->
      <a class="btn" :href="INSTA" target="_blank" rel="noopener" aria-label="Открыть Instagram">
        <span class="ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z"/><circle cx="12" cy="12" r="3.2"/></svg>
        </span>
        <span>Instagram</span>
      </a>

      <!-- 4) WhatsApp -->
      <a class="btn" :href="WHATS" target="_blank" rel="noopener" aria-label="Открыть WhatsApp">
        <span class="ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M20.5 3.5A11 11 0 0 0 2.8 18.1L2 22l4-.8A11 11 0 1 0 20.5 3.5ZM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.5.5-2.3-.2-.3A8 8 0 1 1 12 20Zm4.2-5.6c-.2-.1-1.2-.6-1.4-.7s-.4-.1-.6.1c-.2.2-.6.7-.7.8s-.3.2-.6.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4 0-.6.1-.7l.5-.6c.2-.2.2-.3.3-.6s0-.4 0-.5l-.7-1.6c-.2-.5-.4-.4-.6-.4H8c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3 .9 1.4 2.2 2.4 2.7 1.3 3.1 1.5c.4.2 1.9.6 2.6.4.6-.1 1.2-.5 1.3-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.4-.3Z"/></svg>
        </span>
        <span>WhatsApp</span>
      </a>
    </nav>

    <footer class="foot">© {{ new Date().getFullYear() }} • All rights reserved || created by <a href="https://instagram.com/d.unan_" style="text-decoration: underline; font-weight: bold;">dunanb</a></footer>
  </main>
</template>
