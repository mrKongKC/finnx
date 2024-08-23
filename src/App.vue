<script setup lang="ts">
import Header from './components/layout/Header.vue'
// import VueSlider from 'vue3-slider'

import { ref } from 'vue'
import VueSlider from "vue-3-slider-component";

const value = ref(50)
const currentValue = ref<number>(50) // Start at 50


</script>

<template>
  <Header></Header>
 <main class="flex justify-center main-height">
    <RouterView />
  </main> 
</template>
<style scoped>
.main-height {
  height: calc(100dvh - 131px);
  overflow: auto;
  overflow-x: hidden;
}
</style>
