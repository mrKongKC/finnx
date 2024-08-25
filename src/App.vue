<script setup lang="ts">
import Header from './components/layout/Header.vue'
</script>

<template>
  <Header></Header>
  <main class="flex justify-center main-height">
    <RouterView />
  </main>
</template>
<style scoped lang="scss">
@import '@/assets/variable.scss';

.main-height {
  height: calc(100dvh - 131px);
  overflow: scroll;

  @media (min-width: $size-tablet) {
    overflow-x: hidden;
  }
}
</style>
