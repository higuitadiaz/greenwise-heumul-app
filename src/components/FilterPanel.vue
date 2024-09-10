<template>
  <q-card class="filter-panel">
    <q-card-section class="row">
      <div class="col row q-col-gutter-md">
      <q-select
        v-model="selectedMonth"
        :options="months"
        label="Fecha"
        class="col q-mt-sm"
      />
      <q-select
        v-model="selectedProduct"
        :options="products"
        label="Comuna"
        class="col q-mt-sm"
      />
      <q-select
        v-model="selectedProduct"
        :options="products"
        label="Productor"
        class="col q-mt-sm"
      />
      </div>
      <q-btn @click="applyFilters" color="primary" label="Filtrar" icon="filter_alt" class="q-mt-md" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emits = defineEmits(['filter']);

const selectedMonth = ref<null|{label:string, value:string}>(null);
const selectedProduct = ref<null|{label:string, value:string}>(null);

const months = [
  { label: 'Enero', value: 'Ene' },
  { label: 'Febrero', value: 'Feb' },
  { label: 'Marzo', value: 'Mar' },
  { label: 'Abril', value: 'Abr' },
  { label: 'Mayo', value: 'May' },
  { label: 'Junio', value: 'Jun' }
];

const products = [
  { label: 'Hola-Kola', value: 'Hola-Kola' },
  { label: 'JEJEU', value: 'JEJEU' },
  { label: 'Pepa-Hit', value: 'Pepa-Hit' },
  { label: 'Stone-Beer', value: 'Stone-Beer' },
  { label: 'Valle-Frío', value: 'Valle-Frío' }
];

function applyFilters() {
  emits('filter', { month: selectedMonth.value?.value, product: selectedProduct.value?.value });
}
</script>

<style scoped>
.filter-panel {
  width: 100%;
}
</style>
