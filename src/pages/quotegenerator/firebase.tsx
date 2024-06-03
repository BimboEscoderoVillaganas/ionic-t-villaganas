// firebase.tsx

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Import Firestore

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDN-VpAdu6aLoX0gUJf0MVbo7UTi_l1e4U",
  authDomain: "my-ionic-project-74a84.firebaseapp.com",
  projectId: "my-ionic-project-74a84",
  storageBucket: "my-ionic-project-74a84.appspot.com",
  messagingSenderId: "1075717476161",
  appId: "1:1075717476161:web:575cefb2d29e915fea5bc0",
  measurementId: "G-R34S7CJZ0N"
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
