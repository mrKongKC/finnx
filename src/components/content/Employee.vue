<script lang="ts" setup>
import locale from '@/config/locale.json'
import { employeeData } from '../../config/masterData.js'
import Icon from '../../components/common/Icon.vue'
</script>
<template>
  <div class="grid-container-content-2">
    <div class="grid-item-2">
      <div class="custom-h-600 flex-column gap-20">
        <div class="card relative">
          <div class="card-content-1">
            <h3 class="display-3 blue-color text-center">
              {{ locale.human_resource.employee.first_title }}
            </h3>
          </div>
          <div class="absolute card-content-1-img-layout">
            <img
              src="../../assets/img/leave-profile-1.png"
              alt="leave-profile-1"
              class="responsive-image"
            />
          </div>
        </div>
        <div class="card-blue-l responsive-card-content-1">
          <div class="relative card-content-2">
            <h3 class="display-3 blue-color text-center">
              {{ locale.human_resource.employee.manage_permission }}
            </h3>
            <div class="card-content-2-img-layout">
              <img
                src="../../assets/img/content-employee-profile.png"
                alt="content-employee-profile"
                class="responsive-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid-item-2">
      <div class="custom-h-600">
        <div class="card">
          <div class="card-content-3">
            <div v-for="item in employeeData" :key="item.title">
              <h2 class="sherbet-color display-2">
                {{ item.title }}
              </h2>
              <p class="black-color font-600 mt-24">
                {{ item.subTitle }}
              </p>
              <div class="mt-24 mb-24 grid-item-2__icon-content-container">
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
    </div>
    <div class="grid-item-2 responsive-card-content-2">
      <div class="card-blue-l">
        <div class="relative card-content-2">
          <h3 class="display-3 blue-color text-center">
            {{ locale.human_resource.employee.manage_permission }}
          </h3>
          <div class="card-content-2-img-layout">
            <img
              src="../../assets/img/content-employee-profile.png"
              alt="content-employee-profile"
              class="responsive-image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/variable.scss';

.grid-container-content-2 {
  display: grid;
  justify-content: space-between;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);

  .responsive-card-content-2 {
    display: none;
  }

  .card-content-1-img-layout {
    height: 280px;
    width: 100%;
    max-width: 70%;
    bottom: -39%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (max-width: $size-sm) {
      bottom: -50%;
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
    height: calc(600px - 44px);

    @media (max-width: $size-mobile) {
      height: auto;
    }

    .grid-item-2__icon-content-container {
      display: flex;
      gap: 24px;

      @media (max-width: $size-sm) {
        flex-direction: column;
        gap: 12px;
      }

      .grid-item-2__icon-content {
        max-width: 120px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;

        p {
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
