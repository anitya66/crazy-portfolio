import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCpUnCtIyQdBObUCt9i_s0pJsBbHxR0UT8",
  authDomain: "crazy-portfolio-3d741.firebaseapp.com",
  projectId: "crazy-portfolio-3d741",
  storageBucket: "crazy-portfolio-3d741.firebasestorage.app",
  messagingSenderId: "850863711941",
  appId: "1:850863711941:web:bcb635aeb436dbd29132ac",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);