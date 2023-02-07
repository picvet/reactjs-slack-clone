import { initializeApp } from "firebase/app"; 
import { getFirestore } from 'firebase/firestore';  
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBElWUDf1yljOdLKf1fwHiapixSuySkKMU",
  authDomain: "slack-clone-react-2c410.firebaseapp.com",
  projectId: "slack-clone-react-2c410",
  storageBucket: "slack-clone-react-2c410.appspot.com",
  messagingSenderId: "863569875677",
  appId: "1:863569875677:web:194b4e183dbc66884f0134"
};


const app = initializeApp(firebaseConfig);


const db = getFirestore(app); 
const provider = new GoogleAuthProvider();  
const auth = getAuth();

export { db, provider, auth };