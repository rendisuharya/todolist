import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// isi konfigurasi sesuai dengan konfigurasi firebase kalian
const firebaseConfig = {
  apiKey: "AIzaSyCNElyUU8ZF-R7oUGFnxy8AB-mICAWhyjU",
  authDomain: "projekukk-acd12.firebaseapp.com",
  projectId: "projekukk-acd12",
  storageBucket: "projekukk-acd12.firebasestorage.app",
  messagingSenderId: "1059359638763",
  appId: "1:1059359638763:web:2c392b014e1452ebeeeaae",
  measurementId: "G-Q44RZVBJDS"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
