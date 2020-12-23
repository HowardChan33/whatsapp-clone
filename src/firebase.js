import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCKPG9TjGm_fTOY-7mjfPd9qqs-SaPeWlU",
    authDomain: "whatsapp-clone-8d2c1.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-8d2c1.firebaseio.com",
    projectId: "whatsapp-clone-8d2c1",
    storageBucket: "whatsapp-clone-8d2c1.appspot.com",
    messagingSenderId: "27479926491",
    appId: "1:27479926491:web:168afb52857238d6150efe",
    measurementId: "G-J6YLFGKZ68"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;