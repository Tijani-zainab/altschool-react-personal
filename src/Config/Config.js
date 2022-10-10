// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy04I9kGT9FZqRf1FxugZncxHPO0asJHY",
  authDomain: "altschool-react-personal.firebaseapp.com",
  projectId: "altschool-react-personal",
  storageBucket: "altschool-react-personal.appspot.com",
  messagingSenderId: "583038331785",
  appId: "1:583038331785:web:4a491d9a8e4bf9d26c8f58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;