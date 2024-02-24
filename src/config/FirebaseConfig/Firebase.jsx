import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyB0qYbBh2asyb_GCjF60hy50t_6BOol7-E",
    authDomain: "login-react-router.firebaseapp.com",
    projectId: "login-react-router",
    storageBucket: "login-react-router.appspot.com",
    messagingSenderId: "963970699492",
    appId: "1:963970699492:web:c62512446536121aa25cf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =  getAuth(app);

export {app,auth}