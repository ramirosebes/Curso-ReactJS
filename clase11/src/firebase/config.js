// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1JT-mbBqAV_eXFyeSB2wM4uX5hfybl7U",
    authDomain: "carpishop-6c722.firebaseapp.com",
    projectId: "carpishop-6c722",
    storageBucket: "carpishop-6c722.appspot.com",
    messagingSenderId: "1005813445521",
    appId: "1:1005813445521:web:1ad71e0515c24d67856030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);