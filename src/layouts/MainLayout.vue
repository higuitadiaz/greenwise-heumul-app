<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Monitoreo en Tiempo Real de Material Recolectado en Origen
        </q-toolbar-title>

        <q-btn flat round dense icon="eco" to="/" />
        <q-btn v-if="isAuthenticated" flat @click="logout" label="Cerrar sesión" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-primary text-white"
    >
      <q-list>
        <q-item-label header class="text-white">Menu Principal</q-item-label>
        <q-item active-class="text-secondary" clickable v-ripple to="/dashboard">
          <q-item-section avatar>
            <q-icon name="factory" />
          </q-item-section>
          <q-item-section>Productor</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/cities">
          <q-item-section avatar>
            <q-icon name="location_city" />
          </q-item-section>
          <q-item-section>Ciudades</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/reports">
          <q-item-section avatar>
            <q-icon name="bar_chart" />
          </q-item-section>
          <q-item-section>Reportes Personalizados</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from 'src/stores/auth';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);
const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

const logout = async () => {
  try {
    await authStore.logout();
    // Redirigir a la página de inicio de sesión
  } catch (error) {
    console.error('Error al cerrar sesión:', error);
  }
};
</script>
