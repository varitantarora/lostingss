import { initializeApp } from "@firebase/app";
// import firebase from "@firebase/app";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
    apiKey: process.env.firebaseApi,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
  };

 export const app = initializeApp(firebaseConfig) ;
 export const storage = getStorage(app);