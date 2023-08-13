
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider } from 'firebase/auth'
import  { addDoc, Firestore, getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { doc, setDoc, getDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDlWazL0QKNWE2dgWxhVhlmLLbgStWGvQM",
    authDomain: "foodie-e57b3.firebaseapp.com",
    projectId: "foodie-e57b3",
    storageBucket: "foodie-e57b3.appspot.com",
    messagingSenderId: "294368293510",
    appId: "1:294368293510:web:3fdb9284442f82ff209707",
    measurementId: "G-XZKY4S1DZZ"
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
