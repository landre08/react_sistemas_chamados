
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAfGWCQFInliJH5tX4lF18TWsXoMfQT_8Q",
  authDomain: "tickets-b6bf7.firebaseapp.com",
  projectId: "tickets-b6bf7",
  storageBucket: "tickets-b6bf7.appspot.com",
  messagingSenderId: "336795639965",
  appId: "1:336795639965:web:e5696eedc314c4e71db474"
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { auth, db, storage };