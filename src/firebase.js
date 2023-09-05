// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMi83iePfPnNi90zSbAlJ_7EoZQs3zhj4",
  authDomain: "chat-app-b18a6.firebaseapp.com",
  projectId: "chat-app-b18a6",
  storageBucket: "chat-app-b18a6.appspot.com",
  messagingSenderId: "320200501285",
  appId: "1:320200501285:web:15fe3bd80abc60002cf7cc"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

