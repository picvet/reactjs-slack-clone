import { initializeApp } from "firebase/app"; 
import { getFirestore } from 'firebase/firestore';  
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyAgx_zoimOD05211pwnP3vVRd8pwcFzAh4",
  authDomain: "social-media-react-53e70.firebaseapp.com",
  projectId: "social-media-react-53e70",
  storageBucket: "social-media-react-53e70.appspot.com",
  messagingSenderId: "667514708052",
  appId: "1:667514708052:web:c76bb7f11b059ee4cb8dc1"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app); 
const provider = new GoogleAuthProvider();  
const auth = getAuth();

export { db, provider, auth };
