import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBFVxs3fiRvkJgkuYeeHzSLXs9ZqAhjzps",
    authDomain: "projectlab4-89008.firebaseapp.com",
    databaseURL: "https://projectlab4-89008-default-rtdb.firebaseio.com",
    projectId: "projectlab4-89008",
    storageBucket: "projectlab4-89008.appspot.com",
    messagingSenderId: "142241090923",
    appId: "1:142241090923:web:efe61b801a97dbcb4bd02e",
    measurementId: "G-2YJC9GWYXX"
  };

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const auth = getAuth(app);