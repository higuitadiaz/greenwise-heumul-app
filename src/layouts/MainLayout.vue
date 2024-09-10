<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Huemul App
        </q-toolbar-title>
        <q-btn v-if="isAuthenticated" flat @click="logout" label="Cerrar sesión" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { useAuthStore } from 'src/stores/auth';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);

const logout = async () => {
  try {
    await authStore.logout();
    // Redirigir a la página de inicio de sesión
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }
};
</script>
