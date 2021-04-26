import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAW50U8X7jnuAOvp3Qf258M28MsHC6Gir0",
    authDomain: "disnep-clone-e1722.firebaseapp.com",
    projectId: "disnep-clone-e1722",
    storageBucket: "disnep-clone-e1722.appspot.com",
    messagingSenderId: "666224307893",
    appId: "1:666224307893:web:09eff8a7b4b93a39dc58fc",
    measurementId: "G-0KL1JSVKRH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const storage = firebase.storage()

  export { auth, provider, storage}

  export default db