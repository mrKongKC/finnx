<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import Employee from '@/components/content/vannilaDetail/Employee.vue'
import Department from '@/components/content/vannilaDetail/Department.vue'
import HumanResource from '@/components/content/vannilaDetail/HumanResource.vue'
import Promotion from '@/components/content/vannilaDetail/Promotion.vue'
import Question from '@/components/content/vannilaDetail/Question.vue'
</script>
<template>
  <div class="flex-column-center gap-32 padding-screen mr-24 ml-24">
    <HumanResource />
    <Employee />
    <Department />
    <Promotion />
    <Question />
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/variable.scss';
.padding-screen {
  padding: 0px 90px;

   @media (max-width: 1024px) {
    padding: 0px 40px;
  }

  @media (max-width: $size-tablet) {
    padding: 0px;
  }
}
</style>
