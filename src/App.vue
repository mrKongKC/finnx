<script setup lang="ts">
import Header from '@/components/layout/Header.vue'
import Menu from '@/components/layout/Menu.vue'

import { ref } from 'vue'

const showMenu = ref<boolean>(false)

const handleShowMenu = (trigger: boolean) => {
  showMenu.value = trigger
}
</script>

<template>
  <Header @show-menu="handleShowMenu"></Header>
  <main class="flex justify-center main-height">
    <RouterView v-if="!showMenu" />
    <Menu v-else />
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
