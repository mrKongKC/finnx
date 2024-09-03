<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import locale from '@/config/locale.json'
import { tabs } from '@/config/masterData'
import Icon from '@/components/common/Icon.vue'
import Tab from '@/components/common/Tab.vue'
</script>

<template>
  <div class="card custom-w">
    <div class="grid-container-content-3">
      <div class="grid-item">
        <h3 class="sherbet-color display-2 mw-270">{{ locale.vannila_detail.department.title }}</h3>
        <p class="black-color font-600 text-left mt-10">
          {{ locale.vannila_detail.department.first_sub_title }}
        </p>
        <p class="grey-color font-600 text-left mt-10">
          {{ locale.vannila_detail.department.second_sub_title }}
        </p>
        <div class="mt-10 grid-item-3">
          <div class="grid-item-3__icon-content" v-for="content in tabs" :key="content.title">
            <Icon :icon="content.icon" :img-size="35" :padding="22" white />
            <p class="font-600 text-center">{{ content.title }}</p>
          </div>
        </div>
      </div>
      <div class="over-flow-x-scroll">
        <Tab :items="tabs" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/variable.scss';
.over-flow-x-scroll {
  @media (max-width: $size-sm) {
    overflow-x: scroll;
  }
}

.custom-w {
  width: calc(100% - 64px);
}

.mw-270 {
  max-width: 270px;

  @media (max-width: $size-tablet) {
    max-width: initial;
  }
  @media (max-width: $size-mobile) {
    max-width: 270px;
  }
}

.mw-280 {
  max-width: 280px;
}

.grid-container-content-3 {
  display: grid;
  grid-template-columns: calc(30% - 15px) calc(70% - 15px);
  gap: 30px;
  align-items: flex-start;

  .grid-item-3 {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    width: 100%;

    .grid-item-3__icon-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;

      p {
        max-width: 68px;
      }
    }
  }

  @media (max-width: $size-tablet) {
    grid-template-columns: 1fr;

    .grid-item-3 {
      justify-content: space-around;
      gap: 4px;
    }
  }

  @media (max-width: $size-sm) {
    .grid-item-3 {
      flex-direction: column;
      gap: 12px;

      .grid-item-3__icon-content {
        display: flex;
        max-width: initial;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 12px;
      }
    }
  }
}
</style>
