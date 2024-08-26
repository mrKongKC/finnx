<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { headerRouter, footerRouter } from '@/config/masterData'
import { useRoute } from 'vue-router'

const currentPath = (path: string) => {
  const route = useRoute()
  return route.path === path
}
</script>
<template>
  <footer class="pt-24 pb-24">
    <div class="wrapper mw-lg w-100">
      <nav class="grid-footer-nav-layout pb-24 ml-24 mr-24" aria-label="footer">
        <div class="grid-item">
          <img src="@/assets/logo.svg" alt="logo-finnx" class="mr-8" />
        </div>
        <RouterLink
          v-for="footer in headerRouter"
          to="/"
          :key="footer.title"
          class="footer-router-link text-center grid-item"
        >
          <p
            class="font-600 black-color pointer hover-router-link"
            :class="{ 'blue-color': currentPath(footer.path) }"
          >
            {{ footer.title }}
          </p>
        </RouterLink>
      </nav>
    </div>
    <div class="sub-wrapper mw-lg w-100 pt-24">
      <nav class="footer-nav-layout ml-24" aria-label="sub-footer-policy">
        <RouterLink
          v-for="footer in footerRouter"
          to="/"
          :key="footer.title"
          class="footer-router-link text-center"
        >
          <p class="font-600 black-color pointer">
            {{ footer.title }}
          </p>
        </RouterLink>
      </nav>
      <nav class="footer-nav-layout-icon mr-24" aria-label="sub-footer-icon">
        <img src="@/assets/img/line-icon.svg" alt="line" />
        <img src="@/assets/img/facebook-icon.svg" alt="facebook" />
        <img src="@/assets/img/tiktok-icon.svg" alt="tiktok" />
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/variable.scss';

.wrapper,
.sub-wrapper {
  display: flex;
  align-items: center;

  .grid-footer-nav-layout {
    display: flex;
    border-bottom: 1px solid $grey-wolf;
    width: 100%;
    display: flex;
    align-items: center;
    gap: 16px;

    .grid-item:first-child {
      width: auto;
    }

    .footer-router-link {
      text-decoration: none;
    }

    .hover-router-link {
      &:hover {
        color: $blue;
        transition: all 0.3s ease-in-out;
      }
    }

    @media (max-width: $size-tablet) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-content: center;

      .grid-item:first-child {
        display: flex;
        justify-content: center;
      }

      .grid-item:first-child,
      .grid-item:last-child {
        grid-column: span 2;
      }
    }
  }
}

.sub-wrapper {
  justify-content: space-between;
  border-bottom: 0px;

  .footer-nav-layout,
  .footer-nav-layout-icon {
    display: flex;
    gap: 16px;
    align-items: center;

    .footer-router-link {
      text-decoration: none;
    }
  }

  @media (max-width: $size-tablet) {
    flex-direction: column;
    gap: 24px;
    justify-content: initial;
    align-items: center;

    .footer-nav-layout {
      flex-direction: column;
      gap: 12px;
      justify-content: initial;
      align-items: center;
      margin: 0 !important;
    }

    .footer-nav-layout-icon {
      justify-content: center;
      margin: 0 !important;
    }
  }
}
</style>
