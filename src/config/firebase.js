import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MESSAGING_SENDER_ID, APP_ID } from '@env';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDufdtPQl0TaqiuVyHPndWKAmHQY5ztSfw",
    authDomain: "practica-firebase-20190288.firebaseapp.com",
    projectId: "practica-firebase-20190288",
    storageBucket: "practica-firebase-20190288.appspot.com",
    messagingSenderId: "855232679603",
    appId: "1:855232679603:web:311d807d08a417d1bcaac6"
};

console.log("Valor de configuracion", firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
if (app) {
    console.log('Firebase initialized successfully');
} else {
    console.log('Firebase initialization failed');
}

const database = getFirestore(app);
if (database) {
    console.log('Firestore initialized correctly');
} else {
    console.log('Firestore initialization failed');
}

const storage = getStorage(app);

if (storage) {
    console.log('storage initialized correctly');
} else {
    console.log('storage initialization failed');
}
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export { database, storage, auth };