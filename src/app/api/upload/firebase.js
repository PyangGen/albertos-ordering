
{/*
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyD-9JMeZAH_-3SAGFb0UDJ0mipCy6wrQ10",
  authDomain: "albertos-ordering.firebaseapp.com",
  projectId: "albertos-ordering",
  storageBucket: "albertos-ordering.appspot.com",
  messagingSenderId: "754499321451",
  appId: "1:754499321451:web:a4a51a471fc8fd927cfb2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);*/}



// Correct export with a named export
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  // your firebase configuration
  apiKey: "AIzaSyD-9JMeZAH_-3SAGFb0UDJ0mipCy6wrQ10",
  authDomain: "albertos-ordering.firebaseapp.com",
  projectId: "albertos-ordering",
  storageBucket: "albertos-ordering.appspot.com",
  messagingSenderId: "754499321451",
  appId: "1:754499321451:web:a4a51a471fc8fd927cfb2e"
};

const firebaseApp = initializeApp(firebaseConfig);

export { firebaseApp };



