// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC5O9aQFcuMQaPTVl8ldq1Dg_ieqn0Wt10',
  authDomain: 'netflix-1cf29.firebaseapp.com',
  projectId: 'netflix-1cf29',
  storageBucket: 'netflix-1cf29.firebasestorage.app',
  messagingSenderId: '619240616812',
  appId: '1:619240616812:web:aae188d4e220f448677949',
  measurementId: 'G-RYNCP9DG2M',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
