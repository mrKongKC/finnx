<script setup lang="ts">
import locale from '@/config/locale.json'
import { hrContent, leaveRequest, carouselSteps, employeeData } from '../../config/masterData'
import Icon from '../../components/common/Icon.vue'
import Carousel from '../../components/common/Carousel.vue'
</script>
<template>
  <div class="flex-column-center gap-32 mr-24 ml-24">
    <p class="font-600">{{ locale.human_resource.overview }}</p>
    <h1 class="sherbet-color display-1 mw-550 text-center">
      {{ locale.human_resource.first_title }}
    </h1>
    <div class="grid-container-icon mt-12">
      <div class="grid-item" v-for="content in hrContent" :key="content.title">
        <div class="grid-item__icon-content">
          <Icon :icon="content.icon" :img-size="40" />
          <p class="font-600 text-center">{{ content.title }}</p>
        </div>
      </div>
    </div>
    <h1 class="sherbet-color display-1 mw-550 text-center mt-24">
      {{ locale.human_resource.second_title }}
    </h1>
    <div class="grid-container-content-1">
      <div class="card custom-h-450-left">
        <h2 class="sherbet-color display-2 text-left w-100">
          {{ locale.human_resource.first_sub_title }}
        </h2>
        <p class="black-color font-600 text-left w-100 mt-24">
          {{ locale.human_resource.manage_leave_day }}
        </p>
        <p class="grey-color font-600 text-left mt-24">
          {{ locale.human_resource.manage_leave_day_detail }}
        </p>
        <div class="grid-item-1 mt-36">
          <div
            class="grid-item-1__icon-content"
            v-for="content in leaveRequest"
            :key="content.title"
          >
            <Icon :icon="content.icon" :img-size="35" :padding="22" />
            <p class="font-600 text-center">{{ content.title }}</p>
          </div>
        </div>
      </div>
      <Carousel :items="carouselSteps" />
    </div>
    <div class="grid-container-content-2 pb-40">
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
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/variable.scss';

.mw-550 {
  max-width: 550px;
}

.custom-h-450,
.custom-h-450-left {
  height: 450px;
}

.custom-h-600 {
  height: 600px;
  @media (max-width: $size-tablet) {
    height: auto;
  }
}

.custom-h-450-left {
  @media (max-width: $size-tablet) {
    height: auto;
  }
}

.custom-gap-16 {
  gap: 38px;
  @media (max-width: $size-tablet) {
    gap: 16px;
  }
}

.grid-container-icon {
  display: grid;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);

  .grid-item {
    display: flex;
    justify-content: center;
    align-items: center;

    .grid-item__icon-content {
      max-width: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
  }

  @media (max-width: $size-mobile) {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;

    .grid-item:last-child {
      grid-column: span 2;
    }
  }
}

.grid-container-content-1 {
  display: grid;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  grid-template-columns: calc(37% - 10px) calc(63% - 10px);

  .grid-item-1 {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
    width: 100%;

    .grid-item-1__icon-content {
      max-width: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }
  }

  @media (max-width: $size-tablet) {
    grid-template-columns: 1fr;

    .grid-item-1 {
      justify-content: space-around;
      gap: 4px;
    }
  }

  @media (max-width: $size-mobile) {
    .grid-item-1 {
      gap: 4px;
    }
  }

  @media (max-width: $size-sm) {
    .grid-item-1 {
      flex-direction: column;
      gap: 12px;

      .grid-item-1__icon-content {
        display: flex;
        max-width: initial;
        width: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 12px;
      }
    }
  }
}

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
