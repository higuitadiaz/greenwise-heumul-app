<template>
  <q-page padding>
    <div class="row">
      <FilterPanel @filter="handleFilter" />
    </div>

    <q-card flat class="row bg-transparent">
      <q-card-section></q-card-section>
    </q-card>

    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-3">
        <IndicatorCard title="Kilos MTD" value="13,783" :progress="0.39" :target="35000" />
      </div>
      <div class="col-12 col-md-3">
        <IndicatorCard title="Productores" value="150" :progress="0.6" :target="250" />
      </div>
      <div class="col-12 col-md-3">
        <Gauge :value="65" />
      </div>
      <div class="col-12 col-md-3">
        <Gauge :value="80" />
      </div>
    </div>

    <div class="row q-col-gutter-md q-mt-md">
      <div class="col-12 col-md-6 relative-position">

        <PieChart :data="filteredPieChartData" />

        <div v-if="filteredAreaChartData.isLoading" class="absolute-center">
          <q-spinner-grid size="lg" color="secondary" />
        </div>

      </div>

      <div class="col-12 col-md-6 relative-position">
        <BarChart :data="filteredBarChartData" />

        <div v-if="filteredBarChartData.isLoading" class="absolute-center">
          <q-spinner-grid size="lg" color="secondary" />
        </div>
      </div>
    </div>

    <div class="row q-col-gutter-md q-mt-md">
      <div class="col-12 relative-position">
        <AreaChart :data="filteredAreaChartData" />

        <div v-if="filteredAreaChartData.isLoading" class="absolute-center">
          <q-spinner-grid size="lg" color="secondary" />
        </div>

      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IndicatorCard from 'components/IndicatorCard.vue';
import Gauge from 'components/IndGauge.vue';
import PieChart from 'components/PieChart.vue';
import BarChart from 'components/BarChart.vue';
import AreaChart from 'components/AreaChart.vue';
import FilterPanel from 'components/FilterPanel.vue';
import { getDashboardData } from 'src/utils/remoteData';

// setDataDashboard({
//   id: 'pie-chart-1',
//   type: 'pie',
//   labels: [
//     'Plástico PET',
//     'Plástico PP',
//     'Plástico HDPE',
//     'Latas',
//     'Carton',
//     'Otros'
//   ],
//   datasets: [{
//     data: [
//       300,
//       200,
//       150,
//       100,
//       50,
//       12
//     ],
//
//     backgroundColor: [
//       '#4CAF50',
//       '#FFC107',
//       '#2196F3',
//       '#FF5722',
//       '#9966FF', // Purple
//       '#E7E9ED', // Light Grey
//     ]
//   }]
// });

// setDataDashboard({
//   labels: ['Jun 1', 'Jun 2', 'Jun 3', 'Jun 4', 'Jun 5', 'Jun 6'],
//   datasets: [{
//     label: 'Acumulado',
//     data: [1931, 3587, 6045, 7987, 9937, 13783],
//     backgroundColor: '#9AEB3633',
//     borderColor: '#36eb54',
//     fill: true
//   }],
//   type: 'area',
//   id: 'area-chart-1'
// });

// setDataDashboard({
//   id: 'bar-chart-1',
//   type: 'bar',
//   labels: ['Jun 1', 'Jun 2', 'Jun 3', 'Jun 4', 'Jun 5', 'Jun 6'],
//     datasets: [
//   {
//     label: 'Hola-Kola',
//     data: [22, 9, 14, 15, 6, 13],
//     backgroundColor: '#36A2EB'
//   },
//   {
//     label: 'CCJU',
//     data: [17, 19, 13, 5, 9, 7],
//     backgroundColor: '#FF6384'
//   },
//   {
//     label: 'Pepa-Hit',
//     data: [7, 9, 3, 1, 7, 4],
//     backgroundColor: '#FFCE56'
//   },
//   {
//     label: 'Stone-Beer',
//     data: [10, 11, 7, 5, 4, 13],
//     backgroundColor: '#4BC0C0'
//   },
//   {
//     label: 'Valle-Frío',
//     data: [7, 6, 2, 1, 2, 3],
//     backgroundColor: '#9966FF'
//   }
// ]
// });

export interface ChartData {
  id:string
  labels: string[];
  datasets: { data: number[]; backgroundColor: string }[];
  isLoading: boolean;
}

const filteredPieChartData = ref<ChartData>({ id: '', labels: [], datasets: [], isLoading: true });
const filteredBarChartData = ref<ChartData>({ id: '', labels: [], datasets: [], isLoading: true });
const filteredAreaChartData = ref<ChartData>({ id: '', labels: [], datasets: [], isLoading: true });

getDashboardData({
  type: 'pie'
}).then((data) => {
  if (!data) return

  filteredPieChartData.value = data;
});

getDashboardData({
  type: 'bar'
}).then(data => {
  if (!data) return
  filteredBarChartData.value = data;
});

getDashboardData({
  type: 'area'
}).then(data => {
  if (!data) return
  filteredAreaChartData.value = data;
});

function handleFilter(filters:{month:string, product:string}) {
  const { month, product } = filters;
  console.log(month, product);

}
</script>
