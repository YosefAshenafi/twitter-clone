import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyABg5N31GvQiS1fxeEFustbLzHmQ6Jyspk",
    authDomain: "twitter-clone-5dbb1.firebaseapp.com",
    projectId: "twitter-clone-5dbb1",
    storageBucket: "twitter-clone-5dbb1.appspot.com",
    messagingSenderId: "300189123706",
    appId: "1:300189123706:web:0c3910d0263e0c0362e7c3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp;
// const db = firebaseApp.firestore();
export default db;
