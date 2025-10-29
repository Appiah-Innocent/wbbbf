<template>
  <div class="p-6">
    <h1>Device Dashboard</h1>
    <DeviceList />
  </div>
</template>

<script setup>
import DeviceList from './components/DeviceList.vue'
</script>

<style>
body {
  font-family: Arial, sans-serif;
  background: #f6f6f6;
  color: #333;
}
</style>
