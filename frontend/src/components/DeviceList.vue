<template>
  <div>
    <input v-model="q" @input="fetchDevices" placeholder="Search by name or IP" />
    <table>
      <thead><tr><th>Name</th><th>Status</th><th>IP</th><th>Type</th></tr></thead>
      <tbody>
        <tr v-for="d in devices" :key="d.id">
          <td><router-link :to="`/devices/${d.id}`">{{ d.name }}</router-link></td>
          <td>{{ d.status }}</td><td>{{ d.ipAddress }}</td><td>{{ d.deviceType }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
const q = ref('');
const devices = ref([]);
async function fetchDevices(){ 
  const res = await axios.get('/api/devices', { params: { q: q.value }});
  devices.value = res.data.content || res.data; // depends on pagination
}
fetchDevices();
</script>
