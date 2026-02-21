import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBSiYgv2GydN9fIg23ZAhMk0GIM9TG146U",
    authDomain: "checkoutmyfashion.firebaseapp.com",
    projectId: "checkoutmyfashion",
    storageBucket: "checkoutmyfashion.appspot.com",
    messagingSenderId: "783968791587",
    appId: "1:783968791587:web:e7986993c26f4008a79596",
    measurementId: "G-0J9X19Z5HP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
