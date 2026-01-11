// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGUX48q5k0AhuIHv2jum81qXZVCDW2Qic",
  authDomain: "portfolio-sridhar.firebaseapp.com",
  projectId: "portfolio-sridhar",
  storageBucket: "portfolio-sridhar.firebasestorage.app",
  messagingSenderId: "319567594484",
  appId: "1:319567594484:web:2e36b9f2be2ebefc276fa1",
  measurementId: "G-6W6K929B3M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
