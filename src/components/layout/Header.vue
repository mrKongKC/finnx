<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { headerRouter } from '@/config/masterData'
import { useRoute, useRouter } from 'vue-router'
import locale from '@/config/locale.json'
import { ref, defineEmits } from 'vue'
const emits = defineEmits(['showMenu'])
const showMenu = ref<boolean>(false)
const route = useRoute()
const router = useRouter()

const currentPath = (path: string) => route.path === path

const handleShowMenu = () => {
  showMenu.value = !showMenu.value
  if (!showMenu.value) {
    router.replace('/')
  }
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
          to="/"
          :key="header.title"
          class="header-router-link"
        >
          <p
            class="display-3 font-700 black-color pointer hover-router-link"
            :class="{ 'blue-color': currentPath(header.path) }"
          >
            {{ header.title }}
          </p>
        </RouterLink>
      </nav>
      <div class="header-btn-layout mr-24">
        <button
          class="secondary-btn menu-btn pop-hide-animation"
          v-if="!showMenu"
          @click="handleShowMenu"
        >
          <p class="display-3 font-700">{{ locale.header.menu }}</p>
        </button>
        <button class="close-btn pop-hide-animation" v-else @click="handleShowMenu">
          <p class="display-3 font-700 blue-color tablet-screen">{{ locale.header.back }}</p>
          <img src="@/assets/close-icon.svg" alt="close" class="mb-screen" />
        </button>
        <button class="secondary-btn operate-btn">
          <p class="display-3 font-700">
            {{ locale.header.sign_in }}
          </p>
        </button>
        <button class="primary-btn operate-btn">
          <p class="display-3 font-700">{{ locale.header.start }}</p>
        </button>
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
    cursor: pointer;
    font-weight: 600;
    border-radius: 6px;
    padding: 12px 28px;
    border: 0px;
    background-color: $blue-l;

    .tablet-screen,
    .mb-screen {
      display: block;
    }

    @media (max-width: $size-tablet) {
      .tablet-screen {
        display: block;
      }

      .mb-screen {
        display: none;
      }
    }

    @media (max-width: $size-mobile) {
      background-color: transparent;

      .tablet-screen {
        display: none;
      }

      .mb-screen {
        display: block;
      }
    }
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
