import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC3XbzQTOqwEHndm-Hn3GmJ8q1ni33l4B8",
    authDomain: "crown-db-748df.firebaseapp.com",
    databaseURL: "https://crown-db-748df.firebaseio.com",
    projectId: "crown-db-748df",
    storageBucket: "crown-db-748df.appspot.com",
    messagingSenderId: "1074955497633",
    appId: "1:1074955497633:web:3839cddc4c8b32a26a80e0",
    measurementId: "G-9LXTSW7PES"
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt : 'select_account'});

export const signinwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;