import { initializeApp } from "firebase/app";
// Authentication
import { getAuth, initializeAuth, getReactNativePersistence } from "@firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// Firestore
import { getFirestore } from "firebase/firestore";

const FirebaseConfig = {
  apiKey: "AIzaSyAayuxeUmohw78zSu-9LURh62fFKHulAGo",
  authDomain: "spotify-12165.firebaseapp.com",
  projectId: "spotify-12165",
  storageBucket: "spotify-12165.appspot.com",
  messagingSenderId: "761763632770",
  appId: "1:761763632770:web:892cbce76779eebe9c069b",
  measurementId: "G-5SQJH5BZCB"
};

// Initialize Firebase
export const app = initializeApp(FirebaseConfig);
export const auth = initializeAuth(app, {
   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export const db = getFirestore(app);