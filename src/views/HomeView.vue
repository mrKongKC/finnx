<script setup lang="ts">
import locale from '../config/locale.json'
import FirstContent from '@/components/content/FirstContent.vue'
</script>

<template>
  <div class="flex-column-center w-100">
    <div class="mw-lg w-100">
      <FirstContent></FirstContent>
    </div>
    <div class="container">
      <div class="dashes left-dashes"></div>
      <span class="text">text</span>
      <div class="dashes right-dashes"></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
}

.dashes {
  flex: 1;
  border-top: 1px dashed black; /* Adjust thickness and color if needed */
  margin: 0 10px; /* Space between dashes and text */
}

.left-dashes {
  flex: 1 1 10%; /* Adjust the size of the left dashes */
}

.right-dashes {
  flex: 1 1 90%; /* Adjust the size of the right dashes */
}

.text {
  white-space: nowrap;
  font-size: 16px; /* Adjust font size if needed */
}
</style>
