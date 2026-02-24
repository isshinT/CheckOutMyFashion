import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

document.getElementById("login-btn").addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if(!email || !password){
        alert("メールアドレスとパスワードを入力してください");
        return;
    }

    try{
        await signInWithEmailAndPassword(auth, email, password);
        window.location.href = "profile.html";
    }catch(error){
        alert("ログイン失敗に失敗しました");
    }
})