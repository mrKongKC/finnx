<script setup lang="ts"></script>

<template>
  <header class="flex-center justify-center">
    <div class="wrapper mw-lg w-100">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <div class="primary-shadow blue-bg">
          <p class="grey-wolf-color">test</p>
        </div>
      </nav>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped></style>
