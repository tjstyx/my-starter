<script setup lang="ts">
defineProps<{ msg: string }>()

let count = $ref(0)

const addCount = () => {
  count++
}
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="inline-flex flex-col">
    <button type="button" @click="count++">
      count is: {{ count }}
    </button>
    <button @click="addCount">
      add
    </button>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
