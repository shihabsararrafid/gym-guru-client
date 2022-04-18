// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBvpHAQSzVp50i7LxbXYmB1FaCb5FqtgbI",
    authDomain: "gym-guru-86903.firebaseapp.com",
    projectId: "gym-guru-86903",
    storageBucket: "gym-guru-86903.appspot.com",
    messagingSenderId: "449043372084",
    appId: "1:449043372084:web:dd716180a4bfda8905d261"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;