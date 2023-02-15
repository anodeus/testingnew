import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage"

// Firebase Configs
const firebaseConfig = {
  // apiKey: "AIzaSyCNexJ7p00a9cCe_NCvlN0CfFw7xx0_-kc",
  // authDomain: "chat-room-18213.firebaseapp.com",
  // projectId: "chat-room-18213",
  // storageBucket: "chat-room-18213.appspot.com",
  // messagingSenderId: "637500390783",
  // appId: "1:637500390783:web:d99c8fec19a075a2b8ee4a",
  apiKey: "AIzaSyD4xDGanG-8y_Fz812iugVumMBShrqqO_k",
  authDomain: "mychatmania.firebaseapp.com",
  projectId: "mychatmania",
  storageBucket: "mychatmania.appspot.com",
  messagingSenderId: "102687922492",
  appId: "1:102687922492:web:d66b62c2ed5088a831e639",
  measurementId: "G-SM7M19G0X3"
};

// Checking if app already initialize then don't initialize again
const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
export { db, auth, googleProvider, storage };
