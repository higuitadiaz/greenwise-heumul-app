<template>
  <q-form @submit="onSubmit" class="q-gutter-md">
    <q-input
      v-model="email"
      type="email"
      label="Correo electrónico"
      required
    />
    <q-input
      v-model="password"
      type="password"
      label="Contraseña"
      required
    />
    <q-btn type="submit" color="primary" label="Iniciar sesión" />
  </q-form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from 'src/stores/auth';

const authStore = useAuthStore();
const email = ref('');
const password = ref('');

const onSubmit = async () => {
  try {
    await authStore.login(email.value, password.value);
    // Redirigir al dashboard o mostrar un mensaje de éxito
  } catch (error) {
    // Manejar el error, mostrar un mensaje al usuario
    console.error('Error de inicio de sesión:', error);
  }
};
</script>
