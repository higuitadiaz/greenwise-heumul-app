<template>
  <div class="gauge-container">
    <svg viewBox="0 0 100 50" class="gauge">
      <path
        d="M 10 45 A 35 35 0 0 1 90 45"
        fill="none"
        stroke="#e0e0e0"
        stroke-width="5"
      />
      <path
        :d="gaugePath"
        fill="none"
        :stroke="gaugeColor"
        stroke-width="5"
      />
      <text x="50" y="35" text-anchor="middle" class="gauge-value">{{ value }}%</text>
      <text x="50" y="50" text-anchor="middle" class="gauge-title">{{ title }}</text>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value: number;
  title: string;
}>();

const gaugePath = computed(() => {
  const angle = 1.8 * props.value;
  const startAngle = 180;
  const endAngle = startAngle + angle;
  const start = polarToCartesian(50, 45, 35, startAngle);
  const end = polarToCartesian(50, 45, 35, endAngle);
  const largeArcFlag = angle <= 180 ? '0' : '1';
  return `M ${start.x} ${start.y} A 35 35 0 ${largeArcFlag} 1 ${end.x} ${end.y}`;
});

const gaugeColor = computed(() => {
  if (props.value >= 98) return '#21BA45';
  if (props.value >= 90) return '#ba8f21';
  if (props.value >= 80) return '#ba5c21';
  if (props.value >= 70) return '#F2C037';
  return '#C10015';
});

function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = (angleInDegrees - 10) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}
</script>

<style scoped>
.gauge-container {
  width: 200px;
  margin: auto;
}
.gauge {
  width: 100%;
  height: auto;
}
.gauge-title {
  font-size: 10px;
  font-weight: bold;
}
.gauge-value {
  font-size: 12px;
  font-weight: bold;
}
</style>
