<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { reactive } from 'vue'
import { Collapse } from 'vue-collapsed'
import locale from '@/config/locale.json'
const baseTitle = 'What is Lorem Ipsum?'
const baseAnswer =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

const questions = reactive(
  Array.from({ length: 8 }).map((_, index) => ({
    title: baseTitle,
    answer: baseAnswer,
    index,
    isExpanded: false
  }))
)

const handleAccordion = (selectedIndex: number) => {
  questions.forEach((_, index) => {
    questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
  })
}
</script>

<template>
  <div class="card custom-card">
    <article class="wrapper">
      <div v-for="(question, index) in questions" :key="question.title" class="section w-100">
        <button
          :class="[
            'panel w-100',
            {
              active: question.isExpanded
            }
          ]"
          @click="() => handleAccordion(index)"
        >
          {{ question.title }}
          {{ question.isExpanded }}
        </button>
        <Collapse as="section" :when="question.isExpanded">
          <p class="CollapseContent">
            {{ question.answer }}
          </p>
        </Collapse>
      </div>
    </article>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/variable.scss';

.custom-card {
  width: calc(100% - 64px);
}
</style>
