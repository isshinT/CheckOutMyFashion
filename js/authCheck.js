import { auth } from "./firebase.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

document.getElementById("profile-icon").addEventListener("click", () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            window.location.href = "profile.html";
        } else {
            window.location.href = "register.html";
        }
    });
});
