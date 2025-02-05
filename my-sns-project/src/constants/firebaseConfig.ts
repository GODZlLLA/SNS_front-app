import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCTeqfZ_Xsv4ASmuiYNfLwj5STIdgUuC3I',
  authDomain: 'argonix-3d993.firebaseapp.com',
  projectId: 'argonix-3d993',
  storageBucket: 'argonix-3d993.firebasestorage.app',
  messagingSenderId: '733991534289',
  appId: '1:733991534289:web:20c73dd3115c29f2338ff0',
  measurementId: 'G-FQ5R0MPNF7'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
