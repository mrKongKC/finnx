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
    <h2 class="display-2 sherbet-color text-center">{{ locale.vannila_detail.question.title }}</h2>
    <div class="grid-container mt-24">
      <div v-for="(question, index) in questions" :key="question.title" class="w-100">
        <button :class="['panel w-100']" class="pointer" @click="() => handleAccordion(index)">
          <p class="font-600 black-color">{{ question.title }}</p>
          <img src="@/assets/img/plus-icon.svg" alt="plus" v-show="!question.isExpanded" />
          <img src="@/assets/img/minus-icon.svg" alt="minus" v-show="question.isExpanded" />
        </button>
        <Collapse as="section" :when="question.isExpanded">
          <p class="collapse-content">
            {{ question.answer }}
          </p>
        </Collapse>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/variable.scss';

.custom-card {
  width: calc(100% - 64px);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 10px));
  gap: 20px;
  justify-content: space-between;

  @media (max-width: $size-mobile) {
    grid-template-columns: 1fr;
  }

  .panel {
    background-color: $white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    border: 0px;
    border-bottom: 1px solid $grey-wolf;
  }

  .collapse-content {
    padding: 8px;
  }
}
</style>
