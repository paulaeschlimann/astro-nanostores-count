<template>
    <div className="vue-component">
      <div>
        Count: {{count}} (Vue)
      </div>
      <button @click="() => counterStore.set(count + 1)">
        + 1
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted, ref } from 'vue';
  
  import { counterStore } from '../stores/count'
  
  const count = ref(0)

  onMounted(() => {
    counterStore.subscribe((value) => {
      count.value = value
    })
  })

  </script>