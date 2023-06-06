// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDw6Zu01qSbOnJc1UMKehd5xQ3-Y8SKSQw",
  authDomain: "fir-auth-ef889.firebaseapp.com",
  projectId: "fir-auth-ef889",
  storageBucket: "fir-auth-ef889.appspot.com",
  messagingSenderId: "138345153361",
  appId: "1:138345153361:web:48eecfabbf47dc08c80970"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);