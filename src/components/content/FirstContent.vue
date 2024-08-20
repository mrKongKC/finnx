<script setup lang="ts">
import locale from '../../config/locale.json'
</script>
<template>
  <div class="card ml-24 mr-24">
    <div class="grid-container">
      <div class="grid-item">
        <h1 class="sherbet-color display-1 mb-12">{{ locale.first_content.title }}</h1>
        <h3 class="black-color display-3 mb-12">{{ locale.first_content.sub_title }}</h3>
        <div class="flex-column-start gap-12">
          <button class="secondary-btn w-80">{{ locale.common.detail }}</button>
          <button class="primary-btn w-80">{{ locale.common.start }}</button>
        </div>
      </div>
      <div class="grid-item">
        <img src="../../assets/img/content-1.png" alt="content-1" class="responsive-image" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.w-80 {
  width: 80%;
}

.grid-container {
  display: grid;
  padding: 20px;
  align-items: center;
  grid-template-columns: 40% 60%;
}

.grid-item {
  text-align: left;
  width: 90%;
}

.grid-item:last-child {
  height: 100%;
  width: 100%;
  overflow: hidden;

  .responsive-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
