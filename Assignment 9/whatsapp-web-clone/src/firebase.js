// import firebase from 'firebase/app';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';  //for authentication
import 'firebase/compat/storage';  //for storage
import 'firebase/compat/database'; //for realtime database
import 'firebase/compat/firestore'; // for cloud firestore

const firebaseConfig = {
    apiKey: "AIzaSyDpu2dltD5nC3Dor9niO9pqHssETwN7ekQ",
    authDomain: "whatsapp-web-clone-1a9df.firebaseapp.com",
    projectId: "whatsapp-web-clone-1a9df",
    storageBucket: "whatsapp-web-clone-1a9df.appspot.com",
    messagingSenderId: "371785758162",
    appId: "1:371785758162:web:3d6237922613ecdd3bc40b"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()


export {auth, provider}
export default db;
  
