import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {

    // apiKey: process.env.SOME_KEY,
    apiKey: "AIzaSyAsR8HUGHGCqYB7yySslQvt2VmuUQd_w7Q",
    authDomain: "vue-form-7e151.firebaseapp.com",
    projectId: "vue-form-7e151",
    storageBucket: "vue-form-7e151.appspot.com",
    messagingSenderId: "1063971312409",
    appId: "1:1063971312409:web:5fbd3236ff49069fe5eb88"
};


initializeApp(firebaseConfig)
const db = getFirestore();

export { db }