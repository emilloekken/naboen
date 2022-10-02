// Jeg har valgt at oprette firebase connection i et seperat dokument, da jeg ikke ønskede at app.js 
// ikke skulle være mere rodet end højest nødvendigt
import firebase from 'firebase/compat';

// Min Firebase configuration kode
const firebaseConfig = {
  apiKey: "AIzaSyAlL2o-oFXSGZQF9guXoJDI8-uEmsmddZI",
  authDomain: "naboen-646b9.firebaseapp.com",
  projectId: "naboen-646b9",
  storageBucket: "naboen-646b9.appspot.com",
  messagingSenderId: "682348600072",
  appId: "1:682348600072:web:639ac6ecc2a0cdd8d62abd"
};

// Jeg kontrollere her at der ikke allerede eksisterer en firebase
let app;
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

//authentication vi bruger til sign up og log ind
const auth = firebase.auth()

export { auth };