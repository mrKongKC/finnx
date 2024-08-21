<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

withDefaults(
  defineProps<{
    icon: string
    imgSize: number
  }>(),
  {
    imgSize: 40
  }
)
</script>
<template>
  <div class="icon-container blue-bg" :style="{ width: `${imgSize}px` }">
    <img :src="icon" alt="ref-icon" class="responsive-image" />
  </div>
</template>
<style lang="scss" scoped>
.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 24px;
}
</style>
