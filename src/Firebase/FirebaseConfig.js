import firebase from 'firebase/compat/app'
import "firebase/compat/auth";
import "firebase/compat/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAWW2WXu8LbY2kjjblvh9-MJz2aE2ZEi7g",
  authDomain: "foodapp1-71112.firebaseapp.com",
  projectId: "foodapp1-71112",
  storageBucket: "foodapp1-71112.appspot.com",
  messagingSenderId: "309294138227",
  appId: "1:309294138227:web:386926db2e21891621bb06"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}
export  {firebase};