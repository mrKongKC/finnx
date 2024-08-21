<script setup lang="ts">
import locale from '@/config/locale.json'
import { hrContent, leaveRequest, carouselSteps } from '@/config/masterData'
import Icon from '@/components/common/Icon.vue'
import Carousel from '../common/Carousel.vue'
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
      <div class="card custom-h-500">
        <div class="flex-column-center gap-16">
          <h2 class="sherbet-color display-2 text-left w-100">
            {{ locale.human_resource.first_sub_title }}
          </h2>
          <p class="black-color font-600 text-left w-100">
            {{ locale.human_resource.manage_leave_day }}
          </p>
          <p class="grey-color font-600 text-left">
            {{ locale.human_resource.manage_leave_day_detail }}
          </p>
          <div class="grid-item-1">
            <div
              class="grid-item-1__icon-content"
              v-for="content in leaveRequest"
              :key="content.title"
            >
              <Icon :icon="content.icon" :img-size="35" />
              <p class="font-600 text-center">{{ content.title }}</p>
            </div>
          </div>
        </div>
      </div>
      <Carousel :items="carouselSteps" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.mw-550 {
  max-width: 550px;
}

.custom-h-500 {
  height: 500px;
}

.grid-container-content-1 {
  display: grid;
  gap: 20px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: calc(30% - 10px) calc(70% - 10px);

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
}
</style>
