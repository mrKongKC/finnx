<script setup lang="ts">
import Header from './components/layout/Header.vue'
</script>

<template>
  <Header></Header>
  <main class="flex justify-center main-height">
    <RouterView />
  </main>
</template>
<style scoped>
.main-height {
  height: calc(100dvh - 131px);
  overflow: auto;
  overflow-x: hidden;
}
</style>
