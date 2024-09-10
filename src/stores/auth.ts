import { defineStore } from 'pinia';
import { auth } from 'src/boot/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User
} from 'firebase/auth';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    async checkLogin() {
      this.user = auth.currentUser;
    },
    async login(email: string, password: string) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
      } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        throw error;
      }
    },
    async register(email: string, password: string) {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
      } catch (error) {
        console.error('Error en el registro:', error);
        throw error;
      }
    },
    async logout() {
      try {
        await signOut(auth);
        this.user = null;
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
        throw error;
      }
    },
  },
});
