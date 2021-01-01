import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCQiiu1NIG96RojJhpmqvN7xaCpGnsSjSA",
    authDomain: "bank-statement-515c6.firebaseapp.com",
    databaseURL: "https://bank-statement-515c6.firebaseio.com",
    projectId: "bank-statement-515c6",
    storageBucket: "bank-statement-515c6.appspot.com",
    messagingSenderId: "762404740618",
    appId: "1:762404740618:web:8b4add6484362db0a609f3",
    measurementId: "G-BLFBGREWEQ"
};

export const signInWithGoogle = () => {
    return auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
    if (!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();
    if (!snapshot.exists) {
        const { email, displayName, photoURL } = user;
        try {
            await userRef.set({
                displayName,
                email,
                photoURL,
                ...additionalData
            });
        } catch (error) {
            console.error("Error creating user document", error);
        }
    }
    return getUserDocument(user.uid);
};
const getUserDocument = async uid => {
    if (!uid) return null;
    try {
        const userDocument = await firestore.doc(`users/${uid}`).get();
        return {
            uid,
            ...userDocument.data()
        };
    } catch (error) {
        console.error("Error fetching user", error);
    }
};

const provider = new firebase.auth.GoogleAuthProvider();


firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();