import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_OKequ4cpTOWkfAIQCrbi4MEa8rlMERQ",
  authDomain: "react-app-f5cda.firebaseapp.com",
  projectId: "react-app-f5cda",
  storageBucket: "react-app-f5cda.appspot.com",
  messagingSenderId: "39885639708",
  appId: "1:39885639708:web:cee727fbffbda876aecfd9",
};

const app = firebase.initializeApp(firebaseConfig);

export function getFirestore() {
  return firebase.firestore(app);
}
