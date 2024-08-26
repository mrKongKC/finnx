<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import locale from '@/config/locale.json'
import { tabs } from '@/config/masterData'
import Icon from '@/components/common/Icon.vue'
import Tab from '@/components/common/Tab.vue'
</script>

<template>
  <div class="card">
    <div class="grid-container-content-3">
      <div class="grid-item">
        <h2 class="sherbet-color display-2">{{ locale.human_resource.department.title }}</h2>
        <p class="black-color font-600 text-left mt-24">
          {{ locale.human_resource.department.first_sub_title }}
        </p>
        <p class="grey-color font-600 text-left mt-24">
          {{ locale.human_resource.department.second_sub_title }}
        </p>
        <div class="mt-24 grid-item-3">
          <div class="grid-item-3__icon-content" v-for="content in tabs" :key="content.title">
            <Icon :icon="content.icon" :img-size="35" :padding="22" white />
            <p class="font-600 text-center">{{ content.title }}</p>
          </div>
        </div>
      </div>
      <div>
        <Tab :items="tabs"/>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/variable.scss';

.grid-container-content-3 {
  display: grid;
  grid-template-columns: calc(40% - 20px) calc(60% - 20px);
  gap: 40px;
  // padding: 20px;
  align-items: flex-start;

  .grid-item-3 {
    display: flex;
    justify-content: space-between;
    gap: 24px;
    width: 100%;

    .grid-item-3__icon-content {
      max-width: 140px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
  }

  @media (max-width: $size-tablet) {
    grid-template-columns: 1fr;

    .grid-item-3 {
      justify-content: space-around;
      gap: 24px;
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
