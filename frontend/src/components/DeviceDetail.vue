<template>
  <div>
    <h2>{{ device.name }}</h2>
    <p>IP: {{ device.ipAddress }} — {{ device.deviceType }}</p>
    <div v-for="cfg in metricConfigs" :key="cfg.metricKey" class="chart">
      <h4>{{ cfg.displayName }}</h4>
      <line-chart :labels="labels[cfg.metricKey]" :data="series[cfg.metricKey]" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import LineChart from './LineChart.vue'; // wrapper around chart.js
const route = useRoute();
const device = ref({});
const metricConfigs = ref([]);
const labels = ref({});
const series = ref({});

onMounted(async ()=>{
  const id = route.params.id;
  const res = await axios.get(`/api/devices/${id}`);
  device.value = res.data;
  const cfg = await axios.get(`/api/devices/${id}/metrics/config`);
  metricConfigs.value = cfg.data;
  for(const c of cfg.data){
    const s = await axios.get(`/api/devices/${id}/metrics/${c.metricKey}?from=&to=`);
    labels.value[c.metricKey] = s.data.map(p => new Date(p.ts).toLocaleString());
    series.value[c.metricKey] = s.data.map(p => p.value);
  }
});
</script>
