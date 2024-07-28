import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword  } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCJHaa-I4yj5friIrPd_cYptkassDmBHl4",
    authDomain: "coindecasa.firebaseapp.com",
    projectId: "coindecasa",
    storageBucket: "coindecasa.appspot.com",
    messagingSenderId: "871916116943",
    appId: "1:871916116943:web:62dd41004c258d59ee50ba",
    measurementId: "G-Z1WPENTD05"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';

const registerUser = async (email, password) => {
    const confirmPassword = document.getElementById('confirm-password_s').value;
    if (password !== confirmPassword) {
        document.getElementById('error-message-signUp').textContent = "Password and Confirm Password do not match.";
        return null;
    }

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        document.getElementById('error-message-signUp').textContent = "User registered successfully!";
        return userCredential.user;
    } catch (error) {
        if (error.code === "auth/email-already-in-use") {
            document.getElementById('error-message-signUp').textContent = "Email is already in use.";
        } else {
            document.getElementById('error-message-signUp').textContent = error.message;
        }
        return null;
    }
};

const signInWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        document.getElementById('error-message-signUp').textContent = "User signed in with Google successfully!";
        return user;
    } catch (error) {
        document.getElementById('error-message-signUp').textContent = "Failed to sign in with Google. Please try again later.";
        return null;
    }
};

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = document.getElementById('username_s').value;
    const password = document.getElementById('password_s').value;
    const user = await registerUser(email, password);
});

document.getElementById('google-Signup-btn').addEventListener('click', async () => {
    await signInWithGoogle();
});

export { auth, registerUser, signInWithGoogle };

const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); 

    const email = document.getElementById('username_login').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        document.getElementById('error-message-Login').textContent = "User logged in successfully!";
    } catch (error) {
        if (error.code === "auth/user-not-found") {
            document.getElementById('error-message-Login').textContent = "User not found.";
        } else if (error.code === "auth/invalid-credential") {
            document.getElementById('error-message-Login').textContent = "Invalid email or password.";
        } else {
            document.getElementById('error-message-Login').textContent = error.message;
        }
    }
});


document.getElementById('google-login-btn').addEventListener('click', async () => {
    const user = await signInWithGoogle();
    document.getElementById('error-message-Login').textContent = "User logged in successfully! ";
    if (!user) {
        document.getElementById('error-message-Login').textContent = "Failed to sign in with Google. Please try again later.";
    }
});