<template>
  <router-view />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';

const router = useRouter();
const authStore = useAuthStore();

onMounted(() => {
  if (authStore.isAuthenticated && router.currentRoute.value.path === '/') {
    router.push('/dashboard');
  }
});
</script>
