
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDrb9n1ie4EFKbajzR1EKv7fJPGIgG_14A",
  authDomain: "only-for-you-ecf45.firebaseapp.com",
  projectId: "only-for-you-ecf45",
  storageBucket: "only-for-you-ecf45.appspot.com",
  messagingSenderId: "953286628398",
  appId: "1:953286628398:web:0eadd31dc9559fb239fbbf",
  measurementId: "G-NFGVKLW1B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };