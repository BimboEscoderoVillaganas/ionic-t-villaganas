// firebase.tsx

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Import Firestore

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const db = getFirestore(); // Initialize Firestore

// Function to store quotes in Firestore
const storeQuotes = async (quotes: { id: number; message: string }[]) => {
  try {
    // Iterate over each quote and add it to the "quotes" collection in Firestore
    for (const quote of quotes) {
      await addDoc(collection(db, 'quotes'), { id: quote.id.toString(), message: quote.message });
    }
    console.log('Quotes stored successfully');
  } catch (error) {
    console.error('Error storing quotes:', error);
  }
};

export { db, storeQuotes }; // Export Firestore instance and storeQuotes function for use in other modules