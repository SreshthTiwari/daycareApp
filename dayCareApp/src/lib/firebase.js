import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    // apiKey: "AIzaSyCnU8AYufLlBN1pvsD8f4sOHC2KXk8PM5A",
    authDomain: "daycareapp-c4072.firebaseapp.com",
    projectId: "daycareapp-c4072",
    storageBucket: "daycareapp-c4072.appspot.com",
    messagingSenderId: "643767000677",
    appId: "1:643767000677:web:926d0efbba0bf9861ab08c",
    measurementId: "G-WP5X37DRXN"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()