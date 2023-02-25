import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBNemHb_FUEIN64KSmYs_0_Sy42w2bPO6Y",
    authDomain: "taskmanager-6be6a.firebaseapp.com",
    projectId: "taskmanager-6be6a",
    storageBucket: "taskmanager-6be6a.appspot.com",
    messagingSenderId: "1062191323183",
    appId: "1:1062191323183:web:933a04536d537f780a4eda",
    measurementId: "G-VXX35FK2GS"
  };
  
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export {db}