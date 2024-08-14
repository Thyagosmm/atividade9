// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBmCgy2tZQEaQU1K2l0C2f7ah5V3ylq4UM",

  authDomain: "atividade9-42802.firebaseapp.com",

  projectId: "atividade9-42802",

  storageBucket: "atividade9-42802.appspot.com",

  messagingSenderId: "217605901410",

  appId: "1:217605901410:web:5199e5cbdc8c687524153b",

  measurementId: "G-CRC4308FYP"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);