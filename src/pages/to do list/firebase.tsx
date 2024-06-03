
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
const db = getFirestore(app);

export { db };
