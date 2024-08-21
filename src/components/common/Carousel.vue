<script setup lang="ts">
import { defineProps, computed } from 'vue'

interface ItemProps {
  title: string
  image: string
  iconStep: string
}

defineProps<{
  items: ItemProps[]
}>()
</script>

<template>
  <div class="custom-h-500 card-blue-l">
    <ol class="stepper">
      <li
        v-for="(step, index) in items"
        :key="step.title"
        :class="{ active: index == 0 }"
        class="step-container"
      >
        <div class="group-inside">
          <img :src="step.iconStep" width="28px" />
          <p>{{ step.title }}</p>
        </div>
      </li>
    </ol>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variable.scss';

.custom-h-500 {
  height: 500px;
}

.step-container,
.active.step-container {
  display: flex;
  justify-content: center;
  align-items: center;

  .group-inside {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    position: absolute;
    z-index: 99;
    color: $blue;
  }
}

.active.step-container {
  .group-inside {
    img {
      filter: brightness(0) invert(1);
    }
    p {
      color: $white;
    }
  }
}

ol.stepper {
  --circle: 4.5em;
  --h: 5px;

  display: flex;
  list-style: none;
  justify-content: space-between;
  background: linear-gradient(white 0 0) no-repeat 50% calc((var(--circle) - var(--h)) / 2) / 100%
    var(--h);
  margin: 20px;
  padding: 0;
  font-size: 22px;
  font-weight: bold;
  overflow: hidden;
}

ol.stepper li {
  display: grid;
  place-items: center;
  gap: 5px;
  font-family: sans-serif;
  position: relative;
  overflow: hidden;
}

ol.stepper li::before {
  content: ' ';
  display: grid;
  aspect-ratio: 1;
  height: var(--circle);
  box-sizing: border-box;
  background: $white;
  border-radius: 50%;
  z-index: 1;
}

ol.stepper li.active::before {
  content: ' ';
  display: grid;
  aspect-ratio: 1;
  height: var(--circle);
  box-sizing: border-box;
  background: $blue;
  color: $white;
  border-radius: 50%;
  z-index: 1;
}

ol.stepper li.active ~ li::before {
  background: $white;
}

ol.stepper li.active::after {
  content: '';
  position: absolute;
  height: var(--h);
  right: 100%;
  top: calc((var(--circle) - var(--h)) / 2);
  width: 100vw;
}
</style>
