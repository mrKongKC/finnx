<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import { headerRouter } from '@/config/masterData'
import { useRoute } from 'vue-router'
import locale from '@/config/locale.json'

const currentPath = (path: string) => {
  const route = useRoute()
  return route.path === path
}
</script>

<template>
  <div class="pop-hide-animation w-100 mr-24 ml-24">
    <div class="mw-lg w-100">
      <nav class="header-nav-layout">
        <RouterLink
          v-for="header in headerRouter"
          to="/"
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
      <div class="header-btn-layout mt-16">
        <button class="secondary-btn w-100">
          <h3 class="display-3">
            {{ locale.header.sign_in }}
          </h3>
        </button>
        <button class="primary-btn w-100">
          <h3 class="display-3">{{ locale.header.start }}</h3>
        </button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/variable.scss';

.header-nav-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 16px;

  .header-router-link {
    text-decoration: none;
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
  flex-direction: column;
  width: 100%;
  gap: 16px;
}
</style>
