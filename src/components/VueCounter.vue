<template>
    <div className="vue-component">
      <div>
        Count: {{$count}} (Vue)
      </div>
      <button @click="() => counterStore.set($count + 1)">
        + 1
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  
  import { counterStore } from '../stores/count'
  import { useStore } from '@nanostores/vue'
  
  let $count = useStore(counterStore)
  
  onMounted(() => {
    console.log('mount')
    $count = useStore(counterStore)
  })

  </script>