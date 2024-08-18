import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBmCgy2tZQEaQU1K2l0C2f7ah5V3ylq4UM",
  authDomain: "atividade9-42802.firebaseapp.com",
  projectId: "atividade9-42802",
  storageBucket: "atividade9-42802.appspot.com",
  messagingSenderId: "217605901410",
  appId: "1:217605901410:web:45f4f978b0e020d824153b",
  measurementId: "G-PVD79RNB0B",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { app, auth };
