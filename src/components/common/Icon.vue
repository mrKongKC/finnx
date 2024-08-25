<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'

withDefaults(
  defineProps<{
    icon: string
    imgSize: number
    padding?: number
    white?: boolean
  }>(),
  {
    imgSize: 40,
    padding: 24
  }
)
</script>
<template>
  <div class="icon-container blue-bg" :style="{ width: `${imgSize}px`, padding: `${padding}px` }">
    <img :src="icon" alt="ref-icon" class="responsive-image" :class="{ 'require-white': white }" />
  </div>
</template>
<style lang="scss" scoped>
.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.require-white {
  filter: brightness(0) invert(1);
}
</style>
