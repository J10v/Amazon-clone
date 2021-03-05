import firebase from "firebase";

const firebaseApp = firebase.initalizeApp({
        apiKey: "AIzaSyBPWsFTD0gpy26EBJuiejYL75oFh46x4Sc",
        authDomain: "clone-bf435.firebaseapp.com",
        projectId: "clone-bf435",
        storageBucket: "clone-bf435.appspot.com",
        messagingSenderId: "570576006361",
        appId: "1:570576006361:web:e54417d59317bf6117e2c8",
        measurementId: "G-NMERYN9CCT"
      
});
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };