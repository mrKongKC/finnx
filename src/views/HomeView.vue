<script setup lang="ts">
import locale from '@/config/locale.json'
import OnlineLeave from '@/components/content/OnLineLeave.vue'
import Divider from '@/components/content/Divider.vue'
import Overview from '@/components/content/Overview.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="flex-column-center w-100 pop-hide-animation">
    <div class="mw-lg w-100 mt-36">
      <OnlineLeave />
    </div>
    <Divider :title="locale.online_leave.divider"></Divider>
    <div class="mw-lg w-100 mt-60">
      <Overview />
    </div>
    <div class="mw-lg w-100 mt-50">
      <Footer />
    </div>
  </div>
</template>
<style scoped lang="scss">
</style>
