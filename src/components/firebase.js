import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCrRrns8p-G_d2e9Zd2IhIJ5x0HKnziFds",
    authDomain: "ecommerece-e411f.firebaseapp.com",
    projectId: "ecommerece-e411f",
    storageBucket: "ecommerece-e411f.appspot.com",
    messagingSenderId: "396173217803",
    appId: "1:396173217803:web:cfbb5432a54c92cbaeb70e",
    measurementId: "G-LZ2K45ZKGS"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { analytics, auth };