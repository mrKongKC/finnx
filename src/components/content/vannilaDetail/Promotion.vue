<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import locale from '@/config/locale.json'
import VueSlider from 'vue-3-slider-component'
import { packageList } from '@/config/masterData'
import { promotionListLocales } from '@/config/masterData'
import packageFs from '@/assets/img/package-1.svg'
import packageSc from '@/assets/img/package-2.svg'
import packageTd from '@/assets/img/package-3.svg'
import { computed, ref } from 'vue'

const packagePrices: { [key: string]: number } = {
  Cone: 29,
  Sundae: 59,
  Quart: 89
}

// I don't know the exact discount calculate
// Just calculate by value pattern in UI figma
const packageNets: { [key: string]: number } = {
  Cone: 60,
  Sundae: 100,
  Quart: 200
}

const packageImages: { [key: string]: string } = {
  Cone: packageFs,
  Sundae: packageSc,
  Quart: packageTd
}

const sliderValue = ref(30)

const promotionList = computed(() => {
  return packageList.map((pkg: { title: string }) => {
    const price = sliderValue.value * (packagePrices[pkg.title] || 0)
    const net = price - packageNets[pkg.title] || 0

    return {
      package: {
        ...pkg,
        net: net,
        price: price
      },
      image: packageImages[pkg.title],
      list: promotionListLocales
    }
  })
})
</script>

<template>
  <div class="flex-column-center gap-32 w-100">
    <div class="text-center">
      <h2 class="sherbet-color display-1-responsive mw-550 text-center mt-24">
        {{ locale.vannila_detail.promotion.title }}
      </h2>
      <p class="font-600 mt-12">{{ locale.vannila_detail.promotion.detail }}</p>
    </div>
    <div class="flex-column-center gap-32 w-100">
      <div class="level-person mw-550">
        <div class="title-step-1">
          <p class="circle-blue font-600">1</p>
          <p class="display-3 font-700 blue-color">{{
            locale.vannila_detail.promotion.steps.step_1
          }}</p>
        </div>
        <div class="card custom-card custom-w-100">
          <p class="display-3 font-700 sherbet-color text-center mb-12">
            {{ locale.vannila_detail.promotion.staff }} {{ sliderValue }}
            {{ locale.vannila_detail.promotion.person }}
          </p>
          <VueSlider
            class="custom-slider"
            v-model="sliderValue"
            tooltipPlacement="bottom"
            :dotSize="24"
            :marks="true"
            :min="10"
            :max="100"
            tooltip="always"
            :labelActiveStyle="{ color: 'red' }"
          >
            <template #tooltip="{ value }">
              <p class="display-3 sherbet-color font-700">{{ value }}</p>
            </template>
            <template v-slot:mark="{ label }">
              <div
                v-show="label === 10"
                :class="{ none: sliderValue === 10 }"
                style="position: absolute; left: 0; top: 4px"
              >
                <p class="display-sm" style="color: #8b8b8b">{{ label }}</p>
              </div>
              <div
                v-show="label === 100"
                :class="{ none: sliderValue === 100 }"
                style="position: absolute; right: 0; top: 4px"
              >
                <p class="display-sm" style="color: #8b8b8b">{{ label }}</p>
              </div>
            </template>
          </VueSlider>
        </div>
      </div>
      <div class="flex-column-center gap-24 w-100">
        <div class="title-step-2">
          <p class="circle-blue font-600">2</p>
          <p class="display-3 font-700 blue-color">
            {{ locale.vannila_detail.promotion.steps.step_2 }}
          </p>
        </div>
        <div class="flex-center justify-between gap-12 w-100 custom-flex">
          <div
            v-for="(content, index) in promotionList"
            :key="index"
            class="card-promotion w-100"
            :class="{ 'active-card-promotion': index === 1 }"
          >
            <div class="card-header">
              <div class="card-header-content">
                <div class="recommend-package no-wrap red-bg" v-show="index === 1">
                  <p class="font-600 white-color">
                    {{ locale.vannila_detail.promotion.recommend_package }} 
                  </p>
                </div>
                <div class="flex-center gap-12">
                  <img :src="content.image" :alt="`package-icon-${index}`" />
                  <p class="display-2 font-700 sherbet-color">{{ content.package.title }}</p>
                </div>
                <div class="flex-end gap-12 mt-12">
                  <p class="display-2 green-color font-700">
                    {{
                      `${content.package.net}${locale.vannila_detail.promotion.baht}/${locale.vannila_detail.promotion.month}`
                    }}
                  </p>
                  <p class="font-600 black-color line-through">
                    {{ `${content.package?.price}${locale.vannila_detail.promotion.baht}` }}
                  </p>
                </div>
              </div>
            </div>
            <div class="card-content">
              <div
                class="flex-center gap-12 w-100"
                v-for="(item, index) in content.list"
                :key="index"
              >
                <img src="@/assets/img/allow-icon.svg" alt="allow" />
                <p class="black-color font-600">{{ item.title }}</p>
              </div>
              <button class="primary-btn w-100 mt-12">
                <p class="display-3 font-700">
                  {{ locale.vannila_detail.promotion.trial }}
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/variable.scss';
.mw-550 {
  max-width: 550px;
}

.custom-card {
  padding-top: 36px;
  padding-bottom: 48px;
}

.card-promotion,
.active-card-promotion {
  background-color: $white;
  box-shadow: 0px 2px 4px 0px #00000014;
  border-radius: 10px;

  @media (max-width: $size-mobile) {
    order: 1;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    padding: 20px;
  }

  .card-header {
    border-bottom: 1px solid $polar-bear;

    .card-header-content {
      padding: 20px;
      position: relative;

      .recommend-package {
        border-radius: 4px;
        padding: 4px 8px;
        position: absolute;
        top: -1%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
}

.active-card-promotion {
  background-color: $blue-l;
  border: 2px solid $blue;

  @media (max-width: $size-mobile) {
    order: 2;
  }

  .card-header {
    border-bottom: 2px solid $blue;
  }
}

.custom-flex {
  @media (max-width: $size-mobile) {
    flex-direction: column-reverse;
  }
}

.custom-w-100 {
  width: calc(100% - 64px);
}

.circle-blue {
  display: flex;
  align-items: center;
  justify-content: center;
  background: $blue;
  border-radius: 50%;
  padding: 12px;
  width: 20px;
  height: 20px;
  color: $white;
}

.title-step-1,
.title-step-2 {
  display: flex;
  align-items: center;
  gap: 12px;
}

.level-person {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 24px;
}
</style>
