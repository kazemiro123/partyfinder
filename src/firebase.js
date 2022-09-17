import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyCQcUZKkSKWuelf0EXDWQ34QFH1yE0y-UA",
  authDomain: "partyfinder-6726d.firebaseapp.com",
  projectId: "partyfinder-6726d",
  storageBucket: "partyfinder-6726d.appspot.com",
  messagingSenderId: "139648525178",
  appId: "1:139648525178:web:688e9c0dc02d0a7ccb6cc3"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();
let storage = firebase.storage();

export { 
    firebase, db, storage 
};
