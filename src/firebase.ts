import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBRaysxdfgotzSD6SCdTanwtNGlHYNpND8",
  authDomain: "online-chatroom-9f7e6.firebaseapp.com",
  databaseURL: "https://online-chatroom-9f7e6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "online-chatroom-9f7e6",
  storageBucket: "online-chatroom-9f7e6.appspot.com",
  messagingSenderId: "148252042363",
  appId: "1:148252042363:web:677a7974749361bd6aeede"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage(app);

export { auth, db, storage };