<script setup lang="ts">
import { ref } from 'vue'
import VueSlider from 'vue-3-slider-component'
const value = ref(50)
const isOpen = ref(false)
</script>
<template>
  <div class="flex-column-center w-100">
    <div style="max-width: 1280px; padding: 0 24px; width: 100%">
      <div>
        <VueSlider v-model="value" />
        <p>Value: {{ value }}</p>
      </div>
      <div>
        <button @click="isOpen = !isOpen">Toggle</button>
          <div v-show="isOpen">This div will open and close smoothly!</div>
      </div>
    </div>
  </div>
</template>
<!-- https://www.npmjs.com/package/vue-collapsed -->
<!-- https://vue-3-slider-component.netlify.app/?path=/docs/props-dotoptions--docs -->
<!-- https://stackblitz.com/edit/vue-dmjqey?file=src%2FAccordion.vue -->