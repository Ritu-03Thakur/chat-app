// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import {getAuth} from "firebase/auth" ; 
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6xgw_LNVXcaPdNGOurJ_t3ABpYCRGnkY",
  authDomain: "ritzchat-df0cf.firebaseapp.com",
  projectId: "ritzchat-df0cf",
  storageBucket: "ritzchat-df0cf.appspot.com",
  messagingSenderId: "235173081717",
  appId: "1:235173081717:web:7d30dc6a411dd5c95dbe3c"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();