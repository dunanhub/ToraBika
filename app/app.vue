<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Splash from '../components/Splash.vue'
import InfoPage from '../components/InfoPage.vue'
import { useHead } from '#imports'

useHead({
  link: [{ rel: 'stylesheet', href: '/main.css' }],
  meta: [
    { name: 'viewport', content: 'width=device-width,initial-scale=1,viewport-fit=cover' },
    { name: 'theme-color', content: '#0b0f16' }
  ]
})

const showSplash = ref(true)
const closeSplash = () => (showSplash.value = false)
onMounted(() => setTimeout(closeSplash, 5000))
</script>

<template>
  <div class="site" @click="showSplash && closeSplash()">
    <transition name="fade" mode="out-in">
      <Splash v-if="showSplash" />
      <InfoPage v-else />
    </transition>
  </div>
</template>
