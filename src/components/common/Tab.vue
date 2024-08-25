<script setup lang="ts">
import { defineProps, ref } from 'vue'

interface ItemProps {
  title: string
  image: string
  iconA: string
  icon: string
}

defineProps<{
  items: ItemProps[]
}>()

const currentIndex = ref<number>(0)
const currentHover = ref<number>(0)

const changeImg = (index: number) => {
  currentHover.value = index
}

const activeTab = (index: number) => {
  currentIndex.value = index
}

const setImgDefault = () => {
  currentHover.value = currentIndex.value
}
</script>

<template>
  <div class="relative">
    <div class="tabs-container">
      <div class="nav">
        <div
          v-for="(item, index) in items"
          :key="item.title"
          class="text-center pl-12 pr-12 flex-center gap-12 pb-12 default-tab hover-tab"
          :class="{ 'active-tab': currentIndex === index }"
          @mouseenter="changeImg(index)"
          @mouseleave="setImgDefault"
          @click="activeTab(index)"
        >
          <img
            :src="item.iconA"
            width="24"
            v-if="currentHover === index || currentIndex === index"
          />
          <img :src="item.icon" width="24" v-else />
          <h3 class="diplay-3">{{ item.title }}</h3>
        </div>
      </div>
      <div class="content" v-for="(item, index) in items" :key="index">
          <img
            :src="item.image"
            class="responsive-image pt-24 pop-hide-animation"
            v-if="currentIndex === index"
          />
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variable.scss';

.tabs-container {
  .active-tab {
    color: $blue;
    border-bottom: 3px solid $blue !important;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    gap: 12px;

    .default-tab {
      border-bottom: 3px solid transparent;
    }

    .hover-tab {
      cursor: pointer;
      &:hover {
        color: $blue;
        border-bottom: 3px solid $blue;
        transition: all 0.3s ease-in-out;
      }
    }
  }

  .content {
    width: 100%;
  }
}
</style>
