<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-12 col-md-6 col-lg-3">
        <IndicatorCard title="Kilos MTD" value="13,783" :progress="0.39" :target="35000" />
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <IndicatorCard title="Productores" value="150" :progress="0.6" :target="250" />
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <Gauge :value="65" />
      </div>
      <div class="col-12 col-md-6 col-lg-3">
        <Gauge :value="80" />
      </div>
    </div>

    <div class="row q-col-gutter-md q-mt-md">
      <div class="col-12 col-lg-6">
        <q-card>
          <q-card-section>
            <div class="text-h6">Tipo Materiales</div>
            <PieChart :data="pieChartData" />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-12 col-lg-6">
        <q-card>
          <q-card-section>
            <div class="text-h6">Kilos Diarios x Productor</div>
            <BarChart :data="barChartData" />
          </q-card-section>
        </q-card>
      </div>
    </div>

    <div class="row q-col-gutter-md q-mt-md">
      <div class="col-12">
        <q-card>
          <q-card-section>
            <div class="text-h6">Tendencia de Ventas</div>
            <AreaChart :data="areaChartData" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import IndicatorCard from 'components/IndicatorCard.vue';
import Gauge from 'components/IndGauge.vue';
import PieChart from 'components/PieChart.vue';
import BarChart from 'components/BarChart.vue';
import AreaChart from 'components/AreaChart.vue';

const pieChartData = {
  labels: [
    'Plástico PET',
    'Plástico PP',
    'Plástico HDPE',
    'Latas',
    'Carton',
    'Otros'
  ],
  datasets: [{
    data: [
      300,
      200,
      150,
      100,
      50,
      12
    ],
    backgroundColor: [
      '#FF6384', // Red
      '#36A2EB', // Blue
      '#FFCE56', // Yellow
      '#4BC0C0', // Teal
      '#9966FF', // Purple
      '#ff7340', // Orange
      '#E7E9ED', // Light Grey
      '#76A346', // Green
      '#D4A017', // Gold
      '#C10015'  // Dark Red
    ]
  }]
};

const barChartData = {
  labels: ['Jun 1', 'Jun 2', 'Jun 3', 'Jun 4', 'Jun 5', 'Jun 6'],
  datasets: [
    {
    label: 'Hola-Kola',
    data: [22, 9, 14, 15, 6, 13],
    backgroundColor: '#36A2EB'
  },
    {
      label: 'CCJU',
      data: [17, 19, 13, 5, 9, 7],
      backgroundColor: '#FF6384'
    },
    {
      label: 'Pepa-Hit',
      data: [7, 9, 3, 1, 7, 4],
      backgroundColor: '#FFCE56'
    },
    {
      label: 'Stone-Beer',
      data: [10, 11, 7, 5, 4, 13],
      backgroundColor: '#4BC0C0'
    },
    {
      label: 'Valle-Frío',
      data: [7, 6, 2, 1, 2, 3],
      backgroundColor: '#9966FF'
    }
  ]
};

const areaChartData = {
  labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
  datasets: [{
    label: 'Ventas',
    data: [12, 19, 3, 5, 2, 3],
    backgroundColor: 'rgba(54, 162, 235, 0.2)',
    borderColor: 'rgba(54, 162, 235, 1)',
    fill: true
  }]
};
</script>
