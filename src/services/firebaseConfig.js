import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBIS0jKtEBuIZRfPcpBPAg1Oh1JV7TXr-A",
    authDomain: "obcitywebapp.firebaseapp.com",
    databaseURL: "https://obcitywebapp.firebaseio.com",
    projectId: "obcitywebapp",
    storageBucket: "obcitywebapp.appspot.com",
    messagingSenderId: "68816463498",
    appId: "1:68816463498:web:a00f9e1dbddb1fa834af73",
    // measurementId: "G-2J6CBVKX9W"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;









// Autenticación de usuario y contraseña
  // export async function login({email, pass}){
  //   let data = await firebase.auth().signInWithEmailAndPassword(email, pass)
  //   return data.user
  // }

// Autenticación de correo GMAIL
  // export function loginWithGmail() {
  //   let provider = new firebase.auth.GoogleAuthProvider()
  //   return firebase.auth().signInWithPopup(provider)
  //     .then(user=>user)
  // }

  