<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { headerRouter } from '@/config/masterData'
import { useRoute } from 'vue-router'
import locale from '@/config/locale.json'
import { ref, defineEmits } from 'vue'
const emits = defineEmits(['showMenu'])
const showMenu = ref<boolean>(false)

const currentPath = (path: string) => {
  const route = useRoute()
  return route.path === path
}

const handleShowMenu = () => {
  showMenu.value = !showMenu.value
  emits('showMenu', showMenu.value)
}
</script>
<template>
  <header class="flex-center justify-center pt-24 pb-24">
    <div class="wrapper mw-lg w-100">
      <nav class="header-nav-layout ml-24">
        <img src="@/assets/logo.svg" alt="logo-finnx" class="mr-4" />
        <RouterLink
          v-for="header in headerRouter"
          :to="header.path"
          :key="header.title"
          class="header-router-link"
        >
          <h3
            class="display-3 black-color pointer hover-router-link"
            :class="{ 'blue-color': currentPath(header.path) }"
          >
            {{ header.title }}
          </h3>
        </RouterLink>
      </nav>
      <div class="header-btn-layout mr-24">
        <button class="secondary-btn menu-btn" v-if="!showMenu" @click="handleShowMenu">
          {{ locale.header.menu }}
        </button>
        <button class="close-btn" v-else @click="handleShowMenu">
          <img src="@/assets/close-icon.svg" alt="close" />
        </button>
        <button class="secondary-btn operate-btn">{{ locale.header.sign_in }}</button>
        <button class="primary-btn operate-btn">{{ locale.header.start }}</button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '@/assets/variable.scss';

.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-nav-layout {
    display: flex;
    align-items: center;
    gap: 16px;

    .header-router-link {
      text-decoration: none;

      @media (max-width: $size-tablet) {
        display: none;
      }
    }

    .hover-router-link {
      &:hover {
        color: $blue;
        transition: all 0.3s ease-in-out;
      }
    }
  }

  .header-btn-layout {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .operate-btn {
    display: block;
    @media (max-width: $size-mobile) {
      display: none;
    }
  }

  .close-btn {
    border: 0px;
    background-color: transparent;
  }

  .menu-btn,
  .close-btn {
    display: none;
    @media (max-width: $size-tablet) {
      display: block;
    }
  }
}
</style>
