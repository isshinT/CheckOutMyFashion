import { auth, db } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const userDoc = await getDoc(doc(db, "users", user.uid));

  if(!userDoc.exists()) {
    console.error("ユーザーデータが存在しません");
    return;
  }
  
  const data = userDoc.data();

  document.getElementById("username").textContent = data.username;
  document.getElementById("nickname").textContent = data.nickname;
});

document.getElementById("logout-btn").addEventListener("click", async () => {
  try {
    await signOut(auth);
    alert("ログアウトしました");
    window.location.href = "login.html";
  } catch (error) {
    console.error("ログアウトエラー：", error);
    alert("ログアウトに失敗しました");
  }
})