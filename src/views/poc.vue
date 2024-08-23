<script setup lang="ts">
import { ref } from 'vue'
import VueSlider from 'vue-3-slider-component'
const value = ref(50)
</script>
<template>
  <div style="max-width: 1280px; padding: 0 24px; width: 100%;">
    <VueSlider v-model="value" />
    <p>Value: {{ value }}</p>
  </div>
</template>

<!-- https://vue-3-slider-component.netlify.app/?path=/docs/props-dotoptions--docs -->