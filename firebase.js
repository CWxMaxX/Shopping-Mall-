// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF_Xuk6sIhTp3ayVGzEsRjPiwumvTaGwY",
  authDomain: "shopping-mall-auth.firebaseapp.com",
  projectId: "shopping-mall-auth",
  storageBucket: "shopping-mall-auth.appspot.com",
  messagingSenderId: "436126814683",
  appId: "1:436126814683:web:58dedd37ec625289f417fe",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const auth = firebase.auth();

export { auth };
