<script setup lang="ts">
const vcard = `
BEGIN:VCARD
VERSION:3.0
N:Ubniyev;Sultan;;;
FN:Убниев Султан
TITLE:CEO "StudyOn"
URL;https://studyon-aqtobe.kz
TEL;TYPE=CELL:+7-702-731-4000
URL:https://instagram.com/sultanubniyev
ADR;TYPE=WORK,PREF:;;проспект Алии Молдагуловой, 58/1, Актобе, Астана район, 1 этаж;;;;
END:VCARD
`;

function addContact() {
  // Способ 1: data: URL — часто лучше срабатывает на iOS
  const dataUrl = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vcard);
  window.location.href = dataUrl;

  // Способ 2 (запасной): blob URL (иногда лучше на Android)
  // const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
  // const url = URL.createObjectURL(blob);
  // const a = document.createElement('a');
  // a.href = url;        // ВАЖНО: НЕ ставим a.download — иначе точно скачает файл
  // a.target = '_self';
  // document.body.appendChild(a);
  // a.click();
  // a.remove();
  // setTimeout(() => URL.revokeObjectURL(url), 4000);
}
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
      <button class="btn" @click="addContact">
        <span class="ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M4 3h12a2 2 0 0 1 2 2v2H6a3 3 0 0 0-3 3v7a2 2 0 0 0 2 2h13v-2H5v-7a1 1 0 0 1 1-1h13V5a4 4 0 0 0-4-4H4z"/><path d="M18 13h-2v-2h-2v2h-2v2h2v2h2v-2h2z"/></svg>
        </span>
        <span>Добавить контакт</span>
      </button>
      <!-- 2) Website -->
      <a class="btn" href="https://studyon-aqtobe.kz" aria-label="Перейти на сайт StudyOn" target="_blank">
        <span class="ico" aria-hidden="true">
          <!-- Иконка глобуса -->
          <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18c-1.38 0-2.63-1.64-3.28-4h6.56c-.65 2.36-1.9 4-3.28 4Zm-3.5-6c-.32-1.24-.5-2.62-.5-4s.18-2.76.5-4h7c.32 1.24.5 2.62.5 4s-.18 2.76-.5 4h-7ZM12 4c1.38 0 2.63 1.64 3.28 4H8.72C9.37 5.64 10.62 4 12 4Z"/>
          </svg>
        </span>
        <span>Website "StudyOn"</span>
      </a>

      <!-- 3) Instagram -->
      <a class="btn" :href="https://instagram.com/sultanubniyev" target="_blank" rel="noopener" aria-label="Открыть Instagram">
        <span class="ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm6.5-.9a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2Z"/><circle cx="12" cy="12" r="3.2"/></svg>
        </span>
        <span>Instagram</span>
      </a>

      <!-- 4) WhatsApp -->
      <a class="btn" :href="https://wa.me/77027314000" target="_blank" rel="noopener" aria-label="Открыть WhatsApp">
        <span class="ico" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M20.5 3.5A11 11 0 0 0 2.8 18.1L2 22l4-.8A11 11 0 1 0 20.5 3.5ZM12 20a8 8 0 0 1-4.1-1.1l-.3-.2-2.4.5.5-2.3-.2-.3A8 8 0 1 1 12 20Zm4.2-5.6c-.2-.1-1.2-.6-1.4-.7s-.4-.1-.6.1c-.2.2-.6.7-.7.8s-.3.2-.6.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4 0-.6.1-.7l.5-.6c.2-.2.2-.3.3-.6s0-.4 0-.5l-.7-1.6c-.2-.5-.4-.4-.6-.4H8c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.1 3 .9 1.4 2.2 2.4 2.7 1.3 3.1 1.5c.4.2 1.9.6 2.6.4.6-.1 1.2-.5 1.3-1 .2-.5.2-1 .1-1.1-.1-.1-.3-.2-.4-.3Z"/></svg>
        </span>
        <span>WhatsApp</span>
      </a>
    </nav>

    <footer class="foot">© {{ new Date().getFullYear() }} • All rights reserved || created by <a href="https://instagram.com/d.unan_" style="text-decoration: underline; font-weight: bold;">dunanb</a></footer>
  </main>
</template>
