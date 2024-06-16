import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjf-TEe7jI6W5LDHWGgTKgnACbeuJDCEs",
  authDomain: "ab-proj1.firebaseapp.com",
  projectId: "ab-proj1",
  storageBucket: "ab-proj1.appspot.com",
  messagingSenderId: "344023726512",
  appId: "1:344023726512:web:ad17e84cc99d897a64fe75",
  measurementId: "G-GMLW2SZP2F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export default app;
