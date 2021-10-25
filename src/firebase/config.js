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
    firebase.firestore().collection("users").doc(data.uid).set({id:data.uid, email:data.email, fullName:data.fullName,})
    console.log('User Record created');
}

//READ
export async function getAllUsers() { //returns all user records from the database
    return firebase.firestore().collection("users").get();
}

export async function getUserByID(data) { //returns only the user document with the matching uid
    const record =  firebase.firestore().collection("users").doc(data.uid).get();
    if (!record.exists) {
        console.log('No document with that uid');
        return;
    } else {
        return record.data;
    }
}

export async function getUserByField(data) { //pass in the name of the field you want to search and the value to check for
    const record = firebase.firestore().collection("users").where(data.fieldName, '==', data.fieldValue).get();
    if (!record.exists) {
        console.log('No document matches that value');
        return;
    } else {
        return record.data;
    }
}

//UPDATE
export async function updateUserEmail(data) { //Requires the uid to update the record
    firebase.firestore().collection("users").doc(data.uid).update({ email:data.email });
    console.log('User Email updated');
}

export async function updateUserFullName(data) { //Requires the uid to update the record
    firebase.firestore().collection("users").doc(data.uid).update({ fullName:data.fullName });
    console.log('User Full Name updated');
}

//DELETE
export async function deleteUserRecord(data) { //deletes entire record, it is possible to delete individual fields but not needed
    firebase.firestore().collection("users").doc(data.uid).delete();
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
    firebase.firestore().collection("pvtResults").doc(randomStr).set({score:data.score, testDateTime:data.testDateTime, uid:data.uid,})
    console.log('PVT Result Record created');
}

//READ
export async function getAllPVTResults() { //returns all PVT Result records from the database
    return firebase.firestore().collection("pvtResults").get();
}

export async function getPVTResultByDocumentID(data) { //returns only the PVT Result document with the matching document ID
    const record =  firebase.firestore().collection("pvtResults").doc(data.docID).get();
    if (!record.exists) {
        console.log('No document with that ID');
        return;
    } else {
        return record.data;
    }
}

export async function getPVTResultByField(data) { //pass in the name of the field you want to search and the value to check for
    const record = firebase.firestore().collection("pvtResults").where(data.fieldName, '==', data.fieldValue).get();
    if (!record.exists) {
        console.log('No document matches that value');
        return;
    } else {
        return record.data;
    }
}

//UPDATE
export async function updatePVTTestScore(data) { //Requires the Document ID to update the record
    firebase.firestore().collection("pvtResults").doc(data.docID).update({ score:data.score });
    console.log('PVT Test Score updated');
}

export async function updatePVTTestDateTime(data) { //Requires the Document ID to update the record
    firebase.firestore().collection("pvtResults").doc(data.docID).update({ testDateTime:data.testDateTime });
    console.log('PVT Test DateTime updated');
}

//DELETE
export async function deletePVTResultRecord(data) { //deletes entire record, it is possible to delete individual fields but not needed
    firebase.firestore().collection("pvtResults").doc(data.docID).delete();
    console.log('PVT Result Record deleted');
}

/*-------- END PVT RESULTS CRUD -----------*/



/*--------- BEGIN DAILY SURVEY RESULTS CRUD -----------*/

//CREATE
export async function createDailySurveyRecord(data) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 20;
    let randomStr = "";

    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * characters.length);
        randomStr += characters[randomNum];
    }
    firebase.firestore().collection("dailySurvey").doc(randomStr).set({score:data.score, surveyDateTime:data.testDateTime, surveyType:data.surveyType, uid:data.uid,})
    console.log('Daily Survey Result Record created');
}

//READ
export async function getAllDailySurveyResults() { //returns all Daily Survey Result records from the database
    return firebase.firestore().collection("dailySurvey").get();
}

export async function getDailySurveyResultByDocumentID(data) { //returns only the Daily Survey Result document with the matching document ID
    const record =  firebase.firestore().collection("dailySurvey").doc(data.docID).get();
    if (!record.exists) {
        console.log('No document with that ID');
        return;
    } else {
        return record.data;
    }
}

export async function getDailySurveyResultByField(data) { //pass in the name of the field you want to search and the value to check for
    const record = firebase.firestore().collection("dailySurvey").where(data.fieldName, '==', data.fieldValue).get();
    if (!record.exists) {
        console.log('No document matches that value');
        return;
    } else {
        return record.data;
    }
}

//UPDATE
export async function updateDailySurveyScore(data) { //Requires the Document ID to update the record
    firebase.firestore().collection("dailySurvey").doc(data.docID).update({ score:data.score });
    console.log('Daily Survey Score updated');
}

export async function updateDailySurveyDateTime(data) { //Requires the Document ID to update the record
    firebase.firestore().collection("dailySurvey").doc(data.docID).update({ surveyDateTime:data.testDateTime });
    console.log('Daily Survey DateTime updated');
}

//DELETE
export async function deleteDailySurveyRecord(data) { //deletes entire record, it is possible to delete individual fields but not needed
    firebase.firestore().collection("dailySurvey").doc(data.docID).delete();
    console.log('Daily Survey Record deleted');
}

/*-------- END DAILY SURVEY RESULTS CRUD -----------*/



/*--------- BEGIN WEEKLY SURVEY RESULTS CRUD -----------*/

//CREATE
export async function createWeeklySurveyRecord(data) {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const length = 20;
    let randomStr = "";

    for (let i = 0; i < length; i++) {
        const randomNum = Math.floor(Math.random() * characters.length);
        randomStr += characters[randomNum];
    }
    firebase.firestore().collection("weeklySurvey").doc(randomStr).set({answer:data.answer, surveyDateTime:data.surveyDateTime, surveyType:data.surveyType, uid:data.uid,})
    console.log('Weekly Survey Record created');
}

//READ
export async function getAllWeeklySurveyResults() { //returns all Weekly Survey Result records from the database
    return firebase.firestore().collection("weeklySurvey").get();
}

export async function getWeeklySurveyResultByDocumentID(data) { //returns only the Weekly Survey Result document with the matching document ID
    const record =  firebase.firestore().collection("weeklySurvey").doc(data.docID).get();
    if (!record.exists) {
        console.log('No document with that ID');
        return;
    } else {
        return record.data;
    }
}

export async function getWeeklySurveyResultByField(data) { //pass in the name of the field you want to search and the value to check for
    const record = firebase.firestore().collection("weeklySurvey").where(data.fieldName, '==', data.fieldValue).get();
    if (!record.exists) {
        console.log('No document matches that value');
        return;
    } else {
        return record.data;
    }
}

//UPDATE
export async function updateWeeklySurveyScore(data) { //Requires the Document ID to update the record
    firebase.firestore().collection("weeklySurvey").doc(data.docID).update({ score:data.score });
    console.log('Weekly Survey Score updated');
}

export async function updateWeeklySurveyDateTime(data) { //Requires the Document ID to update the record
    firebase.firestore().collection("weeklySurvey").doc(data.docID).update({ testDateTime:data.testDateTime });
    console.log('Weekly Survey DateTime updated');
}

//DELETE
export async function deleteWeeklySurveyResultRecord(data) { //deletes entire record, it is possible to delete individual fields but not needed
    firebase.firestore().collection("weeklySurvey").doc(data.docID).delete();
    console.log('Weekly Survey Result Record deleted');
}

/*-------- END WEEKLY SURVEY RESULTS CRUD -----------*/


export { firebase };
