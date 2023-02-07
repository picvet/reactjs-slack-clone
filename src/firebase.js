import { initializeApp } from "firebase/app"; 
import { getFirestore } from 'firebase/firestore';  
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app); 
const provider = new GoogleAuthProvider();  
const auth = getAuth();

export { db, provider, auth };
