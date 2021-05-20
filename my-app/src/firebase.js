import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAvN9Vpx0hRpEIiTER_ANKQ8qmoLXFe1qA",
  authDomain: "ecommerce-6ea9d.firebaseapp.com",
  databaseURL: "https://ecommerce-6ea9d.firebaseio.com",
  projectId: "ecommerce-6ea9d",
  storageBucket: "ecommerce-6ea9d.appspot.com",
  messagingSenderId: "314471139352",
  appId: "1:314471139352:web:3bf540dff888a170b01b6d",
  measurementId: "G-SE90RJZQ1D",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
