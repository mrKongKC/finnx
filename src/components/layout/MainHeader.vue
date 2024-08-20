<script setup lang="ts">
import { headerRouter } from '../../config/masterData'
import { useRoute } from 'vue-router'
import locale from '../../config/locale.json'

const currentPath = (path: string) => {
  const route = useRoute()
  return route.path === path
}
</script>
<template>
  <header class="flex-center justify-center p-24">
    <div class="wrapper mw-lg w-100">
      <nav class="header-nav-layout">
        <img src="../../assets/logo.svg" alt="logo-finnx" class="mr-4" />
        <RouterLink
          v-for="header in headerRouter"
          :to="header.path"
          :key="header.title"
          class="header-router-link display-3"
        >
          <h3
            class="display-3 black-color pointer hover-router-link"
            :class="{ 'blue-color': currentPath(header.path) }"
          >
            {{ header.title }}
          </h3>
        </RouterLink>
      </nav>
      <div class="header-btn-layout-lg">
        <button class="secondary-btn">{{ locale.header.sign_in }}</button>
        <button class="primary-btn">{{ locale.header.start }}</button>
      </div>
      <div class="header-btn-layout-sm">
        <button class="secondary-btn">{{ locale.header.menu }}</button>
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

      @media (max-width: $size-mobile) {
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

  .header-btn-layout-lg {
    display: flex;
    align-items: center;
    gap: 12px;
    @media (max-width: $size-mobile) {
      display: none;
    }
  }

  .header-btn-layout-sm {
    display: none;
    align-items: center;
    @media (max-width: $size-mobile) {
      display: flex;
    }
  }
}
</style>
