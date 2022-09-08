import { initializeApp } from "firebase/app";

import { getFirestore, setDoc } from "firebase/firestore";
import firebaseConfig from "./ConfigFireBase";

import {
  collection,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";


const app = initializeApp(firebaseConfig);
export const fireDataBase = getFirestore(app);


