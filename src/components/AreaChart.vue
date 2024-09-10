<template>
  <div class="chart-container">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, Filler } from 'chart.js';
import { computed } from 'vue';

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale, PointElement, CategoryScale, Filler);

const props = defineProps<{
  data: { labels: string[]; datasets: { label: string; data: number[]; backgroundColor: string; borderColor: string; fill: boolean }[] }
}>();

const chartData = computed(() => props.data);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    filler: {
      propagate: true
    },
    title: {
      display: true,
      text: 'Recaudación Acumulada',
      color: '#2E7D32',
      font: {
        size: 16,
        weight: 'bold',
      }
    },
  }
};
</script>

<style scoped>
.chart-container {
  height: 300px;
}
</style>
