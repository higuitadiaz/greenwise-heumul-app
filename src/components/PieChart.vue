<template>
  <div class="chart-container">
    <Pie :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { Pie } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
import { computed } from 'vue';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale);

const props = defineProps<{
  data: { labels: string[]; datasets: { data: number[]; backgroundColor: string[] }[] }
}>();

const chartData = computed(() => props.data);

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'right' as const,
    },
    title: {
      display: true,
      text: 'Distribución de Materiales',
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
