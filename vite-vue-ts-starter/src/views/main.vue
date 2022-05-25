<script setup lang="ts">
const sum = ref<number[]>([111])
</script>

<template>
  <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div class="example">
    css example
  </div>
</template>

<style scoped lang="scss">
.example {
  @apply flex justify-center items-center w-200px h-100px bg-dark-200 text-white hover:(bg-light-300 text-dark-50);
}
</style>
