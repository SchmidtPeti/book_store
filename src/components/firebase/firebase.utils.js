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

export const createUserProfileDocument = async(userAuth,displayName) =>{
    if(!userAuth) return;
    const UserRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await UserRef.get();
    if(!snapShot.exists){
        const {email} = userAuth;
        const createdAt = new Date();
        try {
            await UserRef.set({
                email: email,
                createdAt: createdAt,
                displayName: displayName
            })
        }
        catch (e) {
            console.log('error creating user ',e.message);
        }
    }
    return UserRef;
};

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt : 'select_account'});

export const signinwithGoogle = () => auth.signInWithPopup(provider);

export default firebase;