<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import locale from '@/config/locale.json'
</script>
<template>
  <div class="card mr-24 ml-24">
    <div class="grid-container">
      <div class="grid-item">
        <h1 class="sherbet-color display-1">{{ locale.online_leave.title }}</h1>
        <p class="black-color display-3 mt-10 font-700">{{ locale.online_leave.sub_title }}</p>
        <div class="flex-column-start gap-10 mt-20">
          <button class="secondary-btn custom-w">
            <p class="display-3 font-700">{{ locale.common.detail }}</p>
          </button>
          <button class="primary-btn custom-w">
            <p class="display-3 font-700">{{ locale.common.start }}</p>
          </button>
        </div>
      </div>
      <div class="grid-item">
        <img
          src="@/assets/img/content-1.jpg"
          alt="content-1"
          class="responsive-image"
          loading="lazy"
        />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/variable.scss';
.custom-w {
  width: 80%;
}

.grid-container {
  display: grid;
  padding: 20px;
  align-items: center;
  grid-template-columns: 40% 60%;

  @media (max-width: $size-tablet) {
    grid-template-columns: 1fr;
    .grid-item:first-child {
      order: 2;
      width: 100%;
      text-align: center;

      .custom-w {
        width: 100%;
      }
    }

    .grid-item:last-child {
      order: 1;
    }
  }
}

.grid-item:first-child {
  text-align: left;
  width: 90%;
  @media (max-width: $size-mobile) {
    margin-top: 12px;
  }
}

.grid-item:last-child {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
