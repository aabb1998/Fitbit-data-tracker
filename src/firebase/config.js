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

//const db = getFirestore(app);

/*----------------README-----------------------------------

READ type functions can be used to retrieve ID or key values of
a record in the database before updating or adding a new record

Note that CREATE and UPDATE functions operate in the same way using .set
If a record already exists with .doc(ID), it will override the
record instead of creating a new record. This will erase all values that are not included however

UPDATE functions are best for updating individual fields within an existing record

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





/*-------- BEGIN USERS CRUD -------------------*/

//CREATE
export async function createUser(data) {
    app.collection("users").doc(data.uid).set({id:data.uid, email:data.email, fullName:data.fullName,})
    console.log('User Record created');
}

//READ
export async function getAllUsers() { //returns all user records from the database
    return await app.collection("users").get();
}

export async function getUserByID(data) { //returns only the user document with the matching uid
    const record =  await app.collection("users").doc(data.uid).get();
    if (!record.exists) {
        console.log('No document with that uid');
        return;
    } else {
        return record.data;
    }
}

export async function getUserByField(data) { //pass in the name of the field you want to search and the value to check for
    const record = await app.collection("users").where(data.fieldName, '==', data.fieldValue).get();
    if (!record.exists) {
        console.log('No document matches that value');
        return;
    } else {
        return record.data;
    }
}

//UPDATE
export async function updateUserEmail(data) { //Requires the uid to update the record
    app.collection("users").doc(data.uid).update({ email:data.email });
    console.log('User Email updated');
}

export async function updateUserFullName(data) { //Requires the uid to update the record
    app.collection("users").doc(data.uid).update({ fullName:data.fullName });
    console.log('User Full Name updated');
}

//DELETE
export async function deleteUserRecord(data) { //deletes entire record, it is possible to delete individual fields but not needed
    app.collection("users").doc(data.uid).delete();
    console.log('User Record deleted');
}

/*-------- END USERS CRUD ----------*/



/*--------- BEGIN PVT RESULTS CRUD -----------*/

//CREATE
export async function createPVTRecord(data) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 20;
    let randomStr = "";

    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * characters.length);
        randomStr += characters[randomNum];
    }
    app.collection("pvtResults").doc(randomStr).set({score:data.score, testDateTime:data.testDateTime, uid:data.uid, results:data.results,})
    console.log('PVT Result Record created');
}

//READ
export async function getAllResults() { //returns all PVT Result records from the database
    return await app.collection("pvtResults").get();
}

export async function getPVTResultByUserID(data) { //returns only the PVT Result document with the matching document ID
    const record =  await app.collection("pvtResults").doc(data.docID).get();
    if (!record.exists) {
        console.log('No document with that ID');
        return;
    } else {
        return record.data;
    }
}

export async function getResultByField(data) { //pass in the name of the field you want to search and the value to check for
    const record = await app.collection("pvtResults").where(data.fieldName, '==', data.fieldValue).get();
    if (!record.exists) {
        console.log('No document matches that value');
        return;
    } else {
        return record.data;
    }
}

//UPDATE
export async function updatePVTTestScore(data) { //Requires the Document ID to update the record
    app.collection("pvtResults").doc(data.docID).update({ score:data.score });
    console.log('PVT Test Score updated');
}

export async function updatePVTTestDateTime(data) { //Requires the Document ID to update the record
    app.collection("pvtResults").doc(data.docID).update({ testDateTime:data.testDateTime });
    console.log('PVT Test DateTime updated');
}

//DELETE
export async function deletePVTResultRecord(data) { //deletes entire record, it is possible to delete individual fields but not needed
    app.collection("pvtResults").doc(data.docID).delete();
    console.log('PVT Result Record deleted');
}

/*-------- END PVT RESULTS CRUD -----------*/


export { firebase };
