// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCITx9TMr-inPWbqF4csNwC2vjJRFmwpQw',
  authDomain: 'receta-app-rn.firebaseapp.com',
  projectId: 'receta-app-rn',
  storageBucket: 'receta-app-rn.appspot.com',
  messagingSenderId: '667658114931',
  appId: '1:667658114931:web:299085a0dc2c7206ae9706',
  measurementId: 'G-NJFRGRYNBH',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const authentication = getAuth(app);
