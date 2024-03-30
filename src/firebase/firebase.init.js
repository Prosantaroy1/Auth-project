// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ3YpgtcZp6v6wb8sGrKtamFrhSff-XiQ",
  authDomain: "auth-project-25827.firebaseapp.com",
  projectId: "auth-project-25827",
  storageBucket: "auth-project-25827.appspot.com",
  messagingSenderId: "96202617113",
  appId: "1:96202617113:web:a601fdea4df6538db79588"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);