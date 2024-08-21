<script setup lang="ts">
import locale from '../config/locale.json'
import OnlineLeave from '@/components/content/OnLineLeave.vue'
import Divider from '@/components/content/Divider.vue'
import HR from '@/components/content/HumanResource.vue'
</script>

<template>
  <div class="flex-column-center w-100 gap-20">
    <div class="mw-lg w-100">
      <OnlineLeave />
    </div>
    <Divider :title="locale.online_leave.divider"></Divider>
    <div class="mw-lg w-100 pb-24">
      <HR />
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
