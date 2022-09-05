import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fireDataBase = getFirestore(app);

// export async function readChatsUser(id: string | null) {
//   const q = query(collection(fireDataBase, "chats"), where("userId", "==", id));

//   const unsubscribe = onSnapshot(q, (querySnapshot) => {
//     // const cities = [];
//     querySnapshot.forEach((doc) => {
//       // cities.push(doc.data());
//       console.log(doc.data());
//     });
//     // console.log(cities);
//   });
// }
