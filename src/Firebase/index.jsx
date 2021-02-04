import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config= firebase.initializeApp({
    apiKey: "AIzaSyDiUz1SZWmUs_PLLiJZ05wiU_B4gJiip8A",
    authDomain: "reactregister.firebaseapp.com",
    projectId: "reactregister",
    storageBucket: "reactregister.appspot.com",
    messagingSenderId: "236110462366",
    appId: "1:236110462366:web:7e3a419b75cfd2feae6a8f",
    measurementId: "G-1X260MVXR9"
})

export const firestore= firebase.firestore();
export default config;

  
