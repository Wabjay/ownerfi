// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1BcDCksYwMmOhJasdl7JgyZ8TBH6ANN8",
  authDomain: "ownerfi-28a98.firebaseapp.com",
  projectId: "ownerfi-28a98",
  storageBucket: "ownerfi-28a98.appspot.com",
  messagingSenderId: "61619854900",
  appId: "1:61619854900:web:1c6faec6634b7310ad3461",
  measurementId: "G-2TLZ7DP9CH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// import {
//   FirestoreTextEditor,
//   FirestoreTextEditorProvider,
// } from 'firestore-text-editor';

// function Firebase() {
//   return (
//     <FirestoreTextEditorProvider
//       app={app}
//       EditButton={props => <button {...props}>Edit</button>}
//     >
//       {/* Both editors will have new edit button */}
//       <FirestoreTextEditor path="./" />
//       <FirestoreTextEditor path="pages/faq" />
//     </FirestoreTextEditorProvider>
//   );
// }
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// export default Firebase