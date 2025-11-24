// src/services/firebaseService.js
import { db } from "../lib/firebase.js";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function saveBooking(data) {
    return await addDoc(collection(db, "bookings"), {
        ...data,
        createdAt: serverTimestamp(),
    });
}

export async function saveContactQuery(data) {
    return await addDoc(collection(db, "contact_queries"), {
        ...data,
        createdAt: serverTimestamp(),
    });
}
