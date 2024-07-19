// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "myblog-e94d9.firebaseapp.com",
  projectId: "myblog-e94d9",
  storageBucket: "myblog-e94d9.appspot.com",
  messagingSenderId: "531422174029",
  appId: "1:531422174029:web:b962a65237add50493b504"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);