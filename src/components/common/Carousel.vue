<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { defineProps, ref, watch } from 'vue'

interface ItemProps {
  title: string
  image: string
  iconStep: string
}

const props = defineProps<{
  items: ItemProps[]
}>()

const currentIndex = ref<number>(0)
const activeAnimation = ref<boolean>(false)
const setIndex = (index: number) => {
  if (index > props.items.length - 1) {
    currentIndex.value = 0
  } else if (index < 0) {
    currentIndex.value = props.items.length - 1
  } else {
    currentIndex.value = index
  }
}

watch(currentIndex, (newVal, oldVale) => {
  activeAnimation.value = newVal !== oldVale
  setTimeout(() => {
    activeAnimation.value = false
  }, 500)
})
</script>

<template>
  <div class="custom-h-450 relative card-blue-l">
    <div class="flex justify-center">
      <div class="custom-w-70">
        <ol class="stepper">
          <li
            v-for="(step, index) in items"
            :key="step.title"
            :class="{ active: index == currentIndex }"
            class="step-container"
          >
            <div class="group-inside">
              <img :src="step.iconStep" width="28px" loading="lazy"/>
            </div>
            <p class="font-600">{{ step.title }}</p>
          </li>
        </ol>
      </div>
    </div>
    <div class="left-icon-container">
      <button class="primary-btn-circle" @click="setIndex(currentIndex - 1)">
        <img src="@/assets/img/arrow-left-solid.svg" loading="lazy"/>
      </button>
    </div>
    <div class="right-icon-container">
      <button class="primary-btn-circle" @click="setIndex(currentIndex + 1)">
        <img src="@/assets/img/arrow-right-solid.svg" loading="lazy"/>
      </button>
    </div>
    <div class="custom-w-70 absolute img-display-layout">
      <img
        :alt="items[currentIndex]?.title"
        :src="items[currentIndex].image"
        class="responsive-image"
        :class="{ 'pop-hide-animation': activeAnimation }"
        loading="lazy"
      />
    </div>
    <div class="bottom-btn-layout">
      <button
        class="bottom-btn"
        :class="{ 'bottom-btn-active': index === currentIndex }"
        v-for="(step, index) in items"
        :key="index"
        @click="setIndex(index)"
      ></button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/variable.scss';
.card-blue-l {
  @media (max-width: $size-mobile) {
    padding: 32px 20px;
  }
}

.custom-w-70 {
  max-width: 70%;
  width: 100%;

  @media (max-width: $size-mobile) {
    max-width: initial;
  }
}

.custom-h-450 {
  height: 450px;
}

.img-display-layout {
  height: 300px;
  bottom: -29%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: $size-mobile) {
    margin-bottom: 46px;
  }
}

.bottom-btn-layout {
  position: absolute;
  display: none;
  align-items: center;
  gap: 8px;
  bottom: 4px;
  left: 50%;
  transform: translate(-50%, -50%);

  .bottom-btn,
  .bottom-btn-active {
    border-radius: 50%;
    padding: 8px;
    border: 0px;
    background: $grey-wolf;
    cursor: pointer;

    &:hover {
      background: $blue;
      transition: all 0.3s ease-in-out;
    }
  }

  .bottom-btn-active {
    background: $blue;
  }

  @media (max-width: $size-mobile) {
    display: flex;
  }
}

.img-display-layout.custom-w-70 {
  @media (max-width: $size-sm) {
    width: 90%;
    bottom: -34%;
  }
}

.left-icon-container {
  left: 52px;
  bottom: 100px;
  display: block;
  position: absolute;
}

.right-icon-container {
  right: 52px;
  bottom: 100px;
  display: block;
  position: absolute;
}

.left-icon-container,
.right-icon-container {
  @media (max-width: $size-mobile) {
    display: none;
  }
}

.step-container,
.active.step-container {
  .group-inside {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
    position: absolute;
    z-index: 99;
    color: $blue;
    bottom: 45px;
  }
}

p {
  color: $black;
}

.active.step-container {
  .group-inside {
    img {
      filter: brightness(0) invert(1);
    }
  }
  p {
    color: $blue;
  }
}

ol.stepper {
  --circle: 3em;
  --h: 5px;

  display: flex;
  list-style: none;
  justify-content: space-between;
  background: linear-gradient(white 0 0) no-repeat 50% calc((var(--circle) - var(--h)) / 2) / 100%
    var(--h);
  // margin: 20px;
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
