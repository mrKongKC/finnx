<script setup lang="ts">
import locale from '@/config/locale.json'
import { hrContent, leaveRequest, carouselSteps } from '../../config/masterData'
import Icon from '../../components/common/Icon.vue'
import Carousel from '../../components/common/Carousel.vue'
import Employee from '../../components/content/Employee.vue'
import Department from '../../components/content/Department.vue'
</script>
<template>
  <div class="flex-column-center gap-32 mr-24 ml-24">
    <p class="font-600">{{ locale.human_resource.overview }}</p>
    <h1 class="sherbet-color display-1 mw-550 text-center">
      {{ locale.human_resource.first_title }}
    </h1>
    <div class="grid-container-icon mt-12">
      <div class="grid-item" v-for="content in hrContent" :key="content.title">
        <div class="grid-item__icon-content">
          <Icon :icon="content.icon" :img-size="40" />
          <p class="font-600 text-center">{{ content.title }}</p>
        </div>
      </div>
    </div>
    <h1 class="sherbet-color display-1 mw-550 text-center mt-24">
      {{ locale.human_resource.second_title }}
    </h1>
    <div class="grid-container-content-1">
      <div class="card custom-h-450-left">
        <h2 class="sherbet-color display-2 text-left w-100">
          {{ locale.human_resource.first_sub_title }}
        </h2>
        <p class="black-color font-600 text-left w-100 mt-24">
          {{ locale.human_resource.manage_leave_day }}
        </p>
        <p class="grey-color font-600 text-left mt-24">
          {{ locale.human_resource.manage_leave_day_detail }}
        </p>
        <div class="grid-item-1 mt-36">
          <div
            class="grid-item-1__icon-content"
            v-for="content in leaveRequest"
            :key="content.title"
          >
            <Icon :icon="content.icon" :img-size="35" :padding="22" />
            <p class="font-600 text-center">{{ content.title }}</p>
          </div>
        </div>
      </div>
      <Carousel :items="carouselSteps" />
    </div>
    <Employee/>
    <Department/>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/variable.scss';

.mw-550 {
  max-width: 550px;
}

.custom-h-450,
.custom-h-450-left {
  height: 450px;
}

.custom-h-600 {
  height: 600px;
  @media (max-width: $size-tablet) {
    height: auto;
  }
}

.custom-h-450-left {
  @media (max-width: $size-tablet) {
    height: auto;
  }
}

.custom-gap-16 {
  gap: 38px;
  @media (max-width: $size-tablet) {
    gap: 16px;
  }
}

.grid-container-icon {
  display: grid;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);

  .grid-item {
    display: flex;
    justify-content: center;
    align-items: center;

    .grid-item__icon-content {
      max-width: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
  }

  @media (max-width: $size-mobile) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;

    .grid-item:last-child {
      grid-column: span 2;
    }
  }
}

.grid-container-content-1 {
  display: grid;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  grid-template-columns: calc(37% - 10px) calc(63% - 10px);

  .grid-item-1 {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    width: 100%;

    .grid-item-1__icon-content {
      max-width: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
  }

  @media (max-width: $size-tablet) {
    grid-template-columns: 1fr;

    .grid-item-1 {
      justify-content: space-around;
      gap: 4px;
    }
  }

  @media (max-width: $size-mobile) {
    .grid-item-1 {
      gap: 4px;
    }
  }

  @media (max-width: $size-sm) {
    .grid-item-1 {
      flex-direction: column;
      gap: 12px;

      .grid-item-1__icon-content {
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
