<template>
  <div class="chart-container">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const props = defineProps<{
  data: {
    labels: string[];
    datasets: {
      label: string;
      data: number[];
      borderColor: string;
      backgroundColor: string;
    }[];
  };
  title?: string;
}>();

const chartData = computed(() => ({
  ...props.data,
  datasets: props.data.datasets.map(dataset => ({
    ...dataset,
    fill: true,
    tension: 0.4,
    borderWidth: 3,
    pointRadius: 4,
    pointHoverRadius: 6,
    backgroundColor: (context: any) => {
      const ctx = context.chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, 300);
      gradient.addColorStop(0, `${dataset.backgroundColor}CC`);  // CC para 80% de opacidad
      gradient.addColorStop(1, `${dataset.backgroundColor}00`);  // 00 para 0% de opacidad
      return gradient;
    }
  }))
}));

const chartOptions = computed(() => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: !!props.title,
      text: props.title,
      color: '#2E7D32',
      font: {
        size: 16,
        weight: 'bold',
      }
    },
    tooltip: {
      mode: 'index',
      intersect: false,
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: '#E0E0E0',
      },
    },
  },
  interaction: {
    mode: 'nearest',
    axis: 'x',
    intersect: false
  },
  elements: {
    line: {
      borderJoinStyle: 'round'
    }
  }
}));
</script>

<style scoped>
.chart-container {
  height: 400px;
}
</style>
