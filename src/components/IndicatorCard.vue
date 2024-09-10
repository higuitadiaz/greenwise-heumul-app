<template>
  <q-card class="indicator-card">
    <q-card-section>
      <div class="text-h6">{{ title }}</div>
      <div class="text-h4 q-mt-sm q-mb-xs">{{ value }}</div>
      <q-linear-progress
        :value="progress"
        class="q-mt-sm"
        :color="progressColor"
      />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  title: string;
  value: string | number;
  progress: number;
  target: number;
}>();

const progressColor = computed(() => {
  if (props.progress >= 0.8) return 'positive';
  if (props.progress >= 0.5) return 'warning';
  return 'negative';
});
</script>

<style scoped>
.indicator-card {
  width: 250px;
}
</style>
