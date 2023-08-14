
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider } from 'firebase/auth'
import  { addDoc, Firestore, getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDno8nVDXc68OOTa5JBw9bRnlzSUvcbN3I",
    authDomain: "foodie-510ba.firebaseapp.com",
    projectId: "foodie-510ba",
    storageBucket: "foodie-510ba.appspot.com",
    messagingSenderId: "519063403644",
    appId: "1:519063403644:web:3f332885141a230d54ddf9",
    measurementId: "G-EMTF7NMQKC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const googleprovider = new GoogleAuthProvider()

export const db = getFirestore(app)
export const storage = getStorage(app)
// export const createUserDocument = async (user, userFirstName, userLastName) => {
//     if (!user) return;

//     const userRef = doc(db, 'users', user.uid);
//     const snapshot = await getDoc(userRef);

//     if (!snapshot.exists()) {
//         const { email } = user;

//         try {
//             await addDoc(userRef, {
//                 email,
//                 firstName: userFirstName,
//                 lastName: userLastName,
//             });

//             await updateProfile(auth.currentUser, {
//                 displayName: userFirstName, // Set the username
//             });

//             console.log('User document created successfully');
//         } catch (error) {
//             console.error('Error creating user document:', error);
//         }
//     }
// };
