<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="container mt-24 mb-24">
    <span v-for="i in 2" :key="i" class="box"></span>
    <h3 class="content display-3 text-center">{{ title }}</h3>
    <span v-for="i in 6" :key="i" class="box"></span>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/variable.scss';

.container {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: flex-start;

  @media (min-width: $size-xl) {
    max-width: 1280px;
  }
}

.box {
  background-color: #d9d9d9;
  border-radius: 10px;
  width: 180px;
  height: 62px;
  box-sizing: border-box;
}

.content {
  width: 120px;
}

@media (max-width: $size-tablet) {
  .box:nth-child(3),
  .box:nth-child(5),
  .box:nth-child(4) {
    display: none;
  }
}

@media (max-width: $size-mobile) {
  .box:nth-child(6) {
    display: none;
  }
}
</style>
