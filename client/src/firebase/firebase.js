import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCfrZs-pBs_lTc50GzcEPHXJMjUX6bJp1g",
  authDomain: "driver-cdc78.firebaseapp.com",
  projectId: "driver-cdc78",
  storageBucket: "driver-cdc78.appspot.com",
  messagingSenderId: "834476008011",
  appId: "1:834476008011:web:f830fa7545a48edfa7a3ce",
  measurementId: "G-N76TZG78L2",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
