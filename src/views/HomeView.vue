<script setup lang="ts">
import locale from '../config/locale.json'
import FirstContent from '@/components/content/FirstContent.vue'
import Divider from '@/components/content/Divider.vue'
</script>

<template>
  <div class="flex-column-center w-100 gap-20">
    <div class="mw-lg w-100">
      <FirstContent></FirstContent>
    </div>
    <Divider :title="locale.first_content.divider"></Divider>
    <div class="mw-lg w-100 pb-24">
     
    </div>
  </div>
</template>
<style scoped lang="scss">

</style>
