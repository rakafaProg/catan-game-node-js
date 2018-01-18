const functions = require('firebase-functions');
const firebase = require('firebase-admin');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);

function getData (key) {
    const ref = firebaseApp.database().ref(key);
    return ref.once('value').then(snap => snap.val());
}

function setData (key, data) {
    firebaseApp.database().ref(key).set (
        data
    );
}

function addToData (key, data) {
    const newDataKey = firebase.database().ref().child(key).push().key;
    const updates = {};
    updates['/'+key+'/' + newDataKey] = data;

    return firebase.database().ref().update(updates);
}

exports.getData = getData;
exports.setData = setData;
exports.addToData = addToData;