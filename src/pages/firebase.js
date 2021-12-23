// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABg5N31GvQiS1fxeEFustbLzHmQ6Jyspk",
    authDomain: "twitter-clone-5dbb1.firebaseapp.com",
    projectId: "twitter-clone-5dbb1",
    storageBucket: "twitter-clone-5dbb1.appspot.com",
    messagingSenderId: "300189123706",
    appId: "1:300189123706:web:0c3910d0263e0c0362e7c3"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
export default db;
