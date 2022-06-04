import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyCfG6HxM5_BR0D3l4uGmCDcJCVY06onXfg',
  authDomain: 'fir-crud-nodejs.firebaseapp.com',
  projectId: 'fir-crud-nodejs',
  storageBucket: 'fir-crud-nodejs.appspot.com',
  messagingSenderId: '736015692385',
  appId: '1:736015692385:web:5f69643f81de0fdc9df020',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
