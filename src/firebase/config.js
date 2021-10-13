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

/*----------------README-----------------------------------

READ type functions can be used to retrieve ID or key values of
a record in the database before updating or adding a new record

Note that CREATE and UPDATE functions operate in the same way using .set
If a record already exists with .doc(ID), it will override the
record instead of creating a new record.

When passing 'data' into a database function, ensure it is created in the correct way

const data = {
					field1: field1value,
					field2: field2value,
					field3: field3value,
					.,
					.,
					fieldn: fieldnvalue,
				};

------------------END README--------------------------------*/





/*-------- START USERS CRUD -------------------*/

//CREATE or UPDATE
await function createAndUpdateUser(data) {
    db.collection("users").doc(uid).set({id:data.uid, email:data.email, fullName:data.fullName,})
}

//READ
await function getUserDataByID(data) {
    db.collection("users").doc(data.uid);
    return sleepDataList;
}

await function getUsers(data) {
    db.collection("users").doc(data.uid);
    return userList;
}

//DELETE
await function getSleepDataByID(data) {
    db.collection("sleepData").doc(data.uid);
    return sleepDataList;
}

/*-------- END USER CRUD ----------*/

/*--------- START SURVEY RESULTS CRUD -----------*/

//CREATE
await function createSleepRecord(data, db) {
    db.collection("sleepData").doc(ID).set({})
}

//READ
await function getSleepDataByID(data) {
    db.collection("sleepData").doc(data.uid);
    return sleepDataList;
}

//DELETE
await function getSleepDataByID(data) {
    db.collection("sleepData").doc(data.uid);
    return sleepDataList;
}

/*-------- END SURVEY RESULTS CRUD -----------*/

export { firebase };
