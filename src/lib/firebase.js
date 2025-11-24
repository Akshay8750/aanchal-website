// src/lib/firebase.js (Production ready)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDaiy4cb1aqqEqf1pXMH6WO6GzyGk0QuFU",
    authDomain: "tyagihomeoclinicghaziabad.firebaseapp.com",
    projectId: "tyagihomeoclinicghaziabad",
    storageBucket: "tyagihomeoclinicghaziabad.firebasestorage.app",
    messagingSenderId: "581540387130",
    appId: "1:581540387130:web:c1715bf70c36dbd528d803",
    measurementId: "G-V6EKLMJ97J"
};

// Prevent double initialization
let app;
try {
    app = initializeApp(firebaseConfig);
} catch (e) {
    console.warn("Firebase already initialized");
}

export const db = getFirestore();
