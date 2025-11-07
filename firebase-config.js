// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyCAZ4mVpW6USIn1dWi0Phq_rN1ZgLwntus",
  authDomain: "diocese-sakania-kipushi.firebaseapp.com",
  projectId: "diocese-sakania-kipushi",
  storageBucket: "diocese-sakania-kipushi.firebasestorage.app",
  messagingSenderId: "766500442837",
  appId: "1:766500442837:web:9e6278279b1d4a1f1bc85c"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Références aux services
const db = firebase.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
