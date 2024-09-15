// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfxq50T5VJK-g2R90S_so8W28wDNZ7ls4",
  authDomain: "my-blog-33b1c.firebaseapp.com",
  projectId: "my-blog-33b1c",
  storageBucket: "my-blog-33b1c.appspot.com",
  messagingSenderId: "647699283823",
  appId: "1:647699283823:web:1a7267e8abf5ad79d2f29a",
};

const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };
