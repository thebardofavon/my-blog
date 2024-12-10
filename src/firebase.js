import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCv5wpp7Dvr6pA6qEF9vrejvGSQTWmEONI",
    authDomain: "my-blog-d5da1.firebaseapp.com",
    projectId: "my-blog-d5da1",
    storageBucket: "my-blog-d5da1.firebasestorage.app",
    messagingSenderId: "656819573165",
    appId: "1:656819573165:web:b85e61fa870e9b7c84d124"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
