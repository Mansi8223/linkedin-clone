import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC5nFKH0M67EDd6ZUP_PS8oTQtxRaVuMZY",
    authDomain: "linkedin-clone-yt-c7644.firebaseapp.com",
    projectId: "linkedin-clone-yt-c7644",
    storageBucket: "linkedin-clone-yt-c7644.appspot.com",
    messagingSenderId: "906971629881",
    appId: "1:906971629881:web:b56c97980d21ab4860c0e8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};