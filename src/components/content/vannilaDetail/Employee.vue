<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import locale from '@/config/locale.json'
import { employeeData } from '@/config/masterData'
import Icon from '@/components/common/Icon.vue'
</script>
<template>
  <div class="grid-container-content-2">
    <div class="grid-item-2">
      <div class="custom-h-630 flex-column gap-30">
        <div class="card relative">
          <div class="card-content-1">
            <p class="display-3 font-700 blue-color text-center">
              {{ locale.vannila_detail.employee.first_title }}
            </p>
          </div>
          <div class="absolute card-content-1-img-layout">
            <img
              src="@/assets/img/leave-profile-1.png"
              alt="leave-profile-1"
              class="responsive-image"
              loading="lazy"
            />
          </div>
        </div>
        <div class="card-blue-l responsive-card-content-1">
          <div class="relative card-content-2">
            <p class="display-3 font-700 blue-color text-center">
              {{ locale.vannila_detail.employee.manage_permission }}
            </p>
            <div class="card-content-2-img-layout">
              <img
                src="@/assets/img/content-employee-profile.png"
                alt="content-employee-profile"
                class="responsive-image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-item-2 h-100">
      <div class="card custom-h-630-card">
        <div class="card-content-3">
          <div v-for="item in employeeData" :key="item.title">
            <h3 class="sherbet-color display-2">
              {{ item.title }}
            </h3>
            <p class="black-color font-600 mt-10">
              {{ item.subTitle }}
            </p>
            <div class="mt-38 grid-item-2__icon-content-container">
              <div
                class="grid-item-2__icon-content"
                v-for="content in item.icon"
                :key="content.title"
              >
                <Icon :icon="content.icon" :img-size="35" :padding="22" />
                <p class="font-600">{{ content.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-item-2 responsive-card-content-2">
      <div class="card-blue-l">
        <div class="relative card-content-2">
          <p class="display-3 font-700 blue-color text-center">
            {{ locale.vannila_detail.employee.manage_permission }}
          </p>
          <div class="card-content-2-img-layout">
            <img
              src="@/assets/img/content-employee-profile.png"
              alt="content-employee-profile"
              class="responsive-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/variable.scss';

.custom-h-630 {
  height: 630px;
}

.custom-h-630-card {
  height: calc(630px - 64px);
}

.custom-h-630-card,
.custom-h-630 {
  @media (max-width: $size-tablet) {
    height: auto;
  }
}

.grid-container-content-2 {
  display: grid;
  justify-content: space-between;
  gap: 30px;
  grid-template-columns: repeat(2, calc(50% - 15px));

  .responsive-card-content-2 {
    display: none;
  }

  .card-content-1-img-layout {
    height: 270px;
    width: 100%;
    bottom: -38%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: $size-sm) {
      bottom: -44%;
      max-width: 80%;
    }
  }

  .card-content-2 {
    display: grid;
    grid-template-columns: calc(35% - 10px) calc(65% - 10px);
    align-items: center;
    gap: 20px;
    height: calc(240px - 64px);

    .card-content-2-img-layout {
      height: calc(240px - 64px);
    }

    @media (max-width: $size-tablet) {
      grid-template-columns: 1fr;
      height: auto;

      .card-content-2-img-layout {
        height: 220px;
      }
    }
  }

  .card-content-3 {
    height: calc(630px - 34px);
    display: flex;
    flex-direction: column;
    gap: 52px;

    @media (max-width: $size-tablet) {
      height: auto;
      gap: 20px;
    }

    .grid-item-2__icon-content-container {
      display: flex;
      gap: 32px;

      @media (max-width: $size-tablet) {
        gap: 32px;
      }

      
      @media (max-width: $size-mobile) {
        gap: 4px;
      }

      @media (max-width: $size-sm) {
        flex-direction: column;
        gap: 12px;
      }

      .grid-item-2__icon-content {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        p {
          max-width: 120px;
          text-align: center;
        }

        @media (max-width: $size-sm) {
          flex-direction: row;
          max-width: initial;

          p {
            text-align: left;
          }
        }
      }
    }
  }

  @media (max-width: $size-tablet) {
    grid-template-columns: 1fr;
  }

  @media (max-width: $size-mobile) {
    .responsive-card-content-1 {
      display: none;
    }

    .responsive-card-content-2 {
      display: block;

      @media (max-width: $size-mobile) {
        .card-content-2 {
          grid-template-columns: 1fr;
          height: auto;

          .card-content-2-img-layout {
            height: 220px;
          }
        }
      }
    }
  }

  .card-content-1 {
    height: calc(360px - 64px);
  }
}
</style>
