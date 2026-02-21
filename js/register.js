import { auth, db, storage } from "./firebase.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";
import { collection, query, where, getDocs, doc, setDoc } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-firestore.js";
import { ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-storage.js";

document.getElementById("register-btn").addEventListener("click", async () => {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const username = document.getElementById("username").value.trim();
  const iconFile = document.getElementById("icon").files[0];

  if (!email || !password || !username || !iconFile) {
    alert("すべての項目を入力してください");
    return;
  }

  // ユーザー名重複チェック
  const q = query(collection(db, "users"), where("username", "==", username));
  const querySnapshot = await getDocs(q);

  if (!querySnapshot.empty) {
    alert("このユーザー名は既に使われています");
    return;
  }

  try {
    // Auth 登録
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // アイコンアップロード
    const iconRef = ref(storage, `icons/${user.uid}.png`);
    await uploadBytes(iconRef, iconFile);
    const iconURL = await getDownloadURL(iconRef);

    // Firestore 保存
    await setDoc(doc(db, "users", user.uid), {
      username: username,
      email: email,
      iconURL: iconURL,
      createdAt: new Date()
    });

    window.location.href = "profile.html";

  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      alert("このメールアドレスは既に登録されています");
      return;
    }
    alert("登録失敗：" + error.message);
  }
});
