// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCJqo_7tYI8J8n9q9wQ5s7KvLmZzX8p9r0",
  authDomain: "diocese-sakania-kipushi.firebaseapp.com",
  projectId: "diocese-sakania-kipushi",
  storageBucket: "diocese-sakania-kipushi.firebasestorage.app",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcd1234efgh5678ijkl"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);

// Initialiser Authentication
const auth = getAuth(app);

export { auth, app };
