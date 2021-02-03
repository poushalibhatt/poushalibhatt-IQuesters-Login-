import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { useRef } from 'react';

const config= firebase.initializeApp({
    apiKey: "AIzaSyDiUz1SZWmUs_PLLiJZ05wiU_B4gJiip8A",
    authDomain: "reactregister.firebaseapp.com",
    projectId: "reactregister",
    storageBucket: "reactregister.appspot.com",
    messagingSenderId: "236110462366",
    appId: "1:236110462366:web:7e3a419b75cfd2feae6a8f",
    measurementId: "G-1X260MVXR9"
})

const firebaseAppAuth= firebaseApp.auth();
const providers= {
    mailProvider : new firebase.auth.createUserWithEmailAndPassword()
}
export const generateUserDocument = async (user) => {
    if (!user) return;
    // Confusion
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {  
      const { email, name} = user;
      try {
        await userRef.set({
          name,
          email
        });
      } 
      //
      catch (error) {
        console.error("Error creating user document", error);
      }
    }
    return getUserDocument(user.uid);
  };
  const getUserDocument = async uid => {
    if (!uid) return null;
    try {
      const userDocument = await firestore.doc(`users/${uid}`).get();
      return {
        uid,
        ...userDocument.data()
      };
    } catch (error) {
      console.error("Error fetching user", error);
    }
  };

export const auth= firestore.auth();
export const firestore= firebase.firestore();

  
