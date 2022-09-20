// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app"
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
	apiKey: process.env.REACT_APP_apiKey,
	authDomain: process.env.REACT_APP_authDomain,
	storageBucket: process.env.REACT_APP_projectId,
	projectId: process.env.REACT_APP_storageBucket,
	messagingSenderId: process.env.REACT_APP_messagingSenderId,
	appId: process.env.REACT_APP_appId,
	measurementId: process.env.REACT_APP_meaurementId,
}
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
export default db
export { auth }
export function Signup(email, password) {
	return createUserWithEmailAndPassword(auth, email, password)
}
export function logIn(email, password) {
	return signInWithEmailAndPassword(auth, email, password)
}
