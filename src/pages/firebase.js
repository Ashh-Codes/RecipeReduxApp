// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyBsQBuTavzevAu72bJn5jXYHVfL52Cw8X0",
  authDomain: "reactappauth-3c48b.firebaseapp.com",
  projectId: "reactappauth-3c48b",
  storageBucket: "reactappauth-3c48b.appspot.com",
  messagingSenderId: "940472563421",
  appId: "1:940472563421:web:850fd2d44fd72c877e0d34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const provider = new GoogleAuthProvider()

