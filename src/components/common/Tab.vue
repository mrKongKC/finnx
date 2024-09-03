<!-- eslint-disable vue/multi-word-component-names -->
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
  <div class="tabs-container relative">
    <div class="nav">
      <button
        v-for="(item, index) in items"
        :key="item.title"
        class="text-center flex-center default-tab hover-tab"
        :class="{ 'active-tab': currentIndex === index }"
        @mouseenter="changeImg(index)"
        @mouseleave="setImgDefault"
        @click="activeTab(index)"
      >
        <img :src="item.iconA" :alt="`icon-active-${index}`" width="24" v-if="currentHover === index || currentIndex === index" />
        <img :src="item.icon" :alt="`icon-${index}`" width="24" v-else />
        <h3 class="diplay-3">{{ item.title }}</h3>
      </button>
    </div>
    <div class="content" v-for="(item, index) in items" :key="index">
      <div class="img-container pop-hide-animation" v-if="currentIndex === index">
        <img :src="item.image" class="responsive-image" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variable.scss';

.tabs-container {
  .active-tab {
    color: $blue !important;
    border-bottom: 3px solid $blue !important;
  }

  .nav {
    display: flex;
    justify-content: space-between;

    .default-tab {
      border: 0px;
      background: $white;
      color: $black;
      border-bottom: 3px solid transparent;
      padding: 0 12px 12px 12px;
      gap: 12px;

      @media (max-width: $size-mobile) {
        padding: 0;
        gap: 2px;
        padding-bottom: 12px;
      }
    }

    .hover-tab {
      cursor: pointer;
      &:hover {
        color: $blue !important;
        border-bottom: 3px solid $blue;
        transition: all 0.3s ease-in-out;
      }
    }
  }

  .content {
    .img-container {
      padding-top: 24px;
      width: 100%;
      height: 340px;

      @media (max-width: $size-mobile) {
        padding-top: 0px;
      }
    }
  }
}
</style>
