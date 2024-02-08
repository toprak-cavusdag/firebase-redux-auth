// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDdO0oAGIqZWz4uKJkN0FWJ9BxWr-PscYY',
  authDomain: 'fir-redux-auth-febcc.firebaseapp.com',
  projectId: 'fir-redux-auth-febcc',
  storageBucket: 'fir-redux-auth-febcc.appspot.com',
  messagingSenderId: '761768645973',
  appId: '1:761768645973:web:227f789f7bff48e33d0bdc',
  measurementId: 'G-18N13J6BCV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
