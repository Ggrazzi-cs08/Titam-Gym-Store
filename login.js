import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";

// USE A MESMA CONFIGURAÇÃO DE TODOS OS OUTROS ARQUIVOS
const firebaseConfig = {
  apiKey: "AIzaSyDtymMVJEmQUivZr7ruvQHdg0L370yUaJ4",
  authDomain: "tytangym-9bed1.firebaseapp.com",
  projectId: "tytangym-9bed1",
  storageBucket: "tytangym-9bed1.firebasestorage.app",
  messagingSenderId: "990222345653",
  appId: "1:990222345653:web:452380931b495d5603a5fc",
  measurementId: "G-MH4ZYXVKHT"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Aguardar o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function() {
  const submit = document.getElementById('submit');
  
  if (submit) {
    submit.addEventListener("click", function(event) {
      event.preventDefault();

      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          window.location.href = "splash.html";
        })
        .catch((error) => {
          alert("Erro ao fazer login: " + error.message);
        });
    });
  } else {
    console.error("Botão submit não encontrado!");
  }
});