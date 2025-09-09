import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAa3aKccdUFajT6zs9NSRIyRLYpDifsjgs",
  authDomain: "titan-50e74.firebaseapp.com",
  projectId: "titan-50e74",
  storageBucket: "titan-50e74.appspot.com",
  messagingSenderId: "5930758953",
  appId: "1:5930758953:web:15943cf5801240d9c47d38",
  measurementId: "G-ZNJ8P95R71"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const form = document.getElementById('reset-form');
const emailInput = document.getElementById('email');
const mensagem = document.getElementById('mensagem');

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = emailInput.value.trim();

  try {
    await sendPasswordResetEmail(auth, email);
    mensagem.textContent = "Link de redefinição enviado! Verifique seu e-mail.";
    mensagem.style.color = "#922312";
    emailInput.value = "";
  } catch (error) {
    mensagem.textContent = "Erro: " + error.message;
    mensagem.style.color = "red";
  }
});
