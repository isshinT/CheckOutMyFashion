import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";

document.getElementById("contact-btn").addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const content = document.getElementById("content").value.trim();

  if (!email || !content) {
    alert("すべての項目を入力してください");
    return;
  }

  try {
    await addDoc(collection(db, "contents"), {
      email: email,
      content: content,
      createdAt: new Date()
    });

    window.location.href = "index.html";
  } catch (error) {
    alert("送信に失敗しました");
    console.error(error);
  }
});