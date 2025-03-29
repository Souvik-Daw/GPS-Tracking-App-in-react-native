import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, onSnapshot } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAxrp45K2MTk3m2-4RV848mx2PZwg7JUs0",
    authDomain: "locationtrackingapp-98c59.firebaseapp.com",
    projectId: "locationtrackingapp-98c59",
    storageBucket: "locationtrackingapp-98c59.firebasestorage.app",
    messagingSenderId: "527618325169",
    appId: "1:527618325169:web:dce9f99717555d351c8090",
    measurementId: "G-HSJRLF5454"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, doc, setDoc, collection, onSnapshot };
