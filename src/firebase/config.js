import firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAi3OxyKKck1xon1mFU-cDG1bMN16kAMe8",
	authDomain: "fitbit-data-tracker.firebaseapp.com",
	projectId: "fitbit-data-tracker",
	storageBucket: "fitbit-data-tracker.appspot.com",
	messagingSenderId: "890856216222",
	appId: "1:890856216222:web:889f2fdc72320094b7cd8f",
};

if (!firebase.apps.length) {
	const app = firebase.initializeApp(firebaseConfig);
}

const db = getFirestore(app);

async function getUsers(data, db) {
    collection("users").doc(uid);
    return userList;
}

async function createUser(data, db) {
    firebase.firestore().collection("users").doc(uid).set({id:data.uid, email:data.email, fullName:data.fullName,})
}

async function createSleepRecord(data, db) {
    firebase.firestore().collection("sleepData").doc().set({})
}

async function getSleepRecord(data, db) {
    collection(sleepData).doc(uid);
    return sleepDataList;
}

export { firebase };
