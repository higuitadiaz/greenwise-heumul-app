<template>
  <q-card flat class="full-width bg-transparent">
    <div class="row">
      <div class="col row q-col-gutter-md q-mr-sm">
        <q-select
          v-model="selectedMonth"
          filled
          :options="months"
          label="Fecha"
          class="col q-mt-sm"
        />
        <q-select
          v-model="selectedComuna"
          filled
          :options="comunas"
          label="Comuna"
          class="col q-mt-sm"
        />
        <q-select
          v-model="selectedProduct"
          filled
          :options="products"
          label="Productor"
          class="col q-mt-sm"
        />
      </div>

      <q-btn @click="applyFilters" color="primary" label="Filtrar" icon="filter_alt" class="q-mt-md" />
    </div>
  </q-card>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const emits = defineEmits(['filter']);

const selectedMonth = ref<null|{label:string, value:string}>(null);
const selectedProduct = ref<null|{label:string, value:string}>(null);
const selectedComuna = ref<null|{label:string, value:string}>(null);

const months = [
  { label: 'Enero', value: 'Ene' },
  { label: 'Febrero', value: 'Feb' },
  { label: 'Marzo', value: 'Mar' },
  { label: 'Abril', value: 'Abr' },
  { label: 'Mayo', value: 'May' },
  { label: 'Junio', value: 'Jun' }
];

const comunas = [
  { label: 'San Miguel', value: 'san_miguel' },
  { label: 'Providencia', value: 'Providencia' },
  { label: 'San Ramón', value: 'san_ramon' },
  { label: 'Huechuraba', value: 'huechuraba' },
  { label: 'Las Condes', value: 'las_condes' },
  { label: 'Santiago', value: 'santiago' },
];

const materials = [
  { label: 'Plástico PET', value: 'pet' },
  { label: 'Plástico PP', value: 'pp'},
  { label: 'Plástico HDPE', value: 'hdpe'},
  { label: 'Latas', value: 'latas'},
  { label: 'Carton', value: 'carton'},
  { label: 'Otros', value:'otros'}
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

<style scoped></style>
