import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
  apiKey: "AIzaSyAq4GBqbeesxrZ4UjKiH5sgvp0J20yiz38",
  authDomain: "nyc-diary.firebaseapp.com",
  databaseURL: "https://nyc-diary-default-rtdb.firebaseio.com",
  projectId: "nyc-diary",
  storageBucket: "nyc-diary.appspot.com",
  messagingSenderId: "1089314942511",
  appId: "1:1089314942511:web:529e5357b30412fd1f20da",
  measurementId: "G-54KC8175Y5"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()
//let firebaseCache;

//export const getFirebase = () => {
 // if (firebaseCache) {
 // return firebaseCache
 // }
 // if (!firebase.apps.length) {
  //  firebase.initializeApp({});
// }else {
 //   firebase.app(); // if already initialized, use that one
// }
  //firebase.initializeApp(firebaseConfig);
 // firebaseCache = firebase;
 // return firebase
 // };

export default firebase