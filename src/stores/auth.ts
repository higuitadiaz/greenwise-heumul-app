import { defineStore } from 'pinia';
import { auth } from 'src/boot/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User
} from 'firebase/auth';
import { LocalStorage } from 'quasar';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
  }),
  getters: {
    isAuthenticated: (state) => LocalStorage.getItem('uid') || !!state.user,
  },
  actions: {
    async checkLogin() {
      this.user = auth.currentUser;
    },
    async login(email: string, password: string) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        this.user = userCredential.user;
        LocalStorage.setItem('uid', userCredential.user.uid);
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
        LocalStorage.removeItem('uid');
      } catch (error) {
        console.error('Error al cerrar sesión:', error);
        throw error;
      }
    },
  },
});
