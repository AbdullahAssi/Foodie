
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider } from 'firebase/auth'
import  { addDoc, Firestore, getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { doc, setDoc, getDoc } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDCDgpkzfwrZAbxYNcrmLbU-NAl2w4iZoU",
    authDomain: "foodie-b4377.firebaseapp.com",
    projectId: "foodie-b4377",
    storageBucket: "foodie-b4377.appspot.com",
    messagingSenderId: "904827002782",
    appId: "1:904827002782:web:e05290a80295b75761808f",
    measurementId: "G-7TYDS2KT73"
};

// Initialize Firebase
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
