import { boot } from 'quasar/wrappers';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebase = {
  // Reemplaza esto con tu configuración de Firebase
  // apiKey: 'YOUR_API_KEY',
  // authDomain: 'YOUR_AUTH_DOMAIN',
  // projectId: 'YOUR_PROJECT_ID',
  // storageBucket: 'YOUR_STORAGE_BUCKET',
  // messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
  // appId: 'YOUR_APP_ID',
  apiKey: 'AIzaSyAX9d-cxoiHG8wzyB9DLsNhQYiN-ApvSKE',
  authDomain: 'huemul-app.firebaseapp.com',
  projectId: 'huemul-app',
  storageBucket: 'huemul-app.appspot.com',
  messagingSenderId: '103840484633',
  appId: '1:103840484633:web:9de49e29e0932cdb4c0988',
  measurementId: 'G-EBLHZLX9QG'
};

const app = initializeApp(firebase);
const auth = getAuth(app);

export default boot(({ app }) => {
  app.config.globalProperties.$firebase = app;
  app.config.globalProperties.$auth = auth;
});

export { auth, app };
