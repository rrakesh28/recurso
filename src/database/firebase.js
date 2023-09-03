import { initializeApp  } from "firebase/app"
import { getFirestore  } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCg4douzqySnsye-tWQfO8EdSEV5YBtPEQ",
  authDomain: "recursohub.firebaseapp.com",
  projectId: "recursohub",
  storageBucket: "recursohub.appspot.com",
  messagingSenderId: "1039872302472",
  appId: "1:1039872302472:web:3238b7e0289eadecb22e3d",
  measurementId: "G-62D1GPZE05"
}
// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {db}
