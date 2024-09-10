<template>
  <q-page class="auth-container">
    <q-card class="auth-card">
      <q-card-section class="text-center">
        <q-avatar size="80px" font-size="40px" color="primary" text-color="white">
          GW
        </q-avatar>
        <div class="text-h5 q-mt-md text-primary">GreenWiser App</div>
        <div class="text-subtitle1 q-mt-sm">Monitoreo de Recolección de residuos</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="onSubmit" class="q-gutter-md">
          <q-input
            filled
            v-model="email"
            label="Correo electrónico"
            type="email"
            :rules="[val => !!val || 'El correo es requerido', isValidEmail]"
          >
            <template v-slot:prepend>
              <q-icon name="email" color="primary" />
            </template>
          </q-input>

          <q-input
            filled
            v-model="password"
            label="Contraseña"
            :type="isPwd ? 'password' : 'text'"
            :rules="[val => !!val || 'La contraseña es requerida']"
          >
            <template v-slot:prepend>
              <q-icon name="lock" color="primary" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
                color="primary"
              />
            </template>
          </q-input>

          <div>
            <q-btn label="Iniciar sesión" type="submit" color="primary" class="full-width q-py-sm"/>
          </div>
        </q-form>
      </q-card-section>

      <q-card-section class="text-center q-pa-none">
        <q-btn flat color="primary" label="¿Olvidaste tu contraseña?" @click="onForgotPassword"/>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useRouter } from 'vue-router';
import { useAuthStore } from 'src/stores/auth';

const $q = useQuasar();
const router = useRouter();
const authStore = useAuthStore();

const email = ref('');
const password = ref('');
const isPwd = ref(true);

authStore.checkLogin()
  .then(() => {
    if (authStore.isAuthenticated) {
      router.push('/dashboard');
    }
  });

const isValidEmail = (val: string) => {
  const emailPattern = /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
  return emailPattern.test(val) || 'Correo electrónico inválido';
};

const onSubmit = async () => {
  try {
    await authStore.login(email.value, password.value);
    router.push('/dashboard');
  } catch (error) {
    $q.notify({
      color: 'negative',
      message: 'Error de autenticación. Por favor, verifica tus credenciales.',
      icon: 'report_problem'
    });
  }
};

const onForgotPassword = () => {
  // Implementar lógica para recuperar contraseña
  $q.notify({
    color: 'info',
    message: 'Función de recuperación de contraseña no implementada.',
    icon: 'info'
  });
};
</script>
