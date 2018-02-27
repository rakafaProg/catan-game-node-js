const functions = require('firebase-functions');
const firebase = require('firebase-admin');
firebase.initializeApp(functions.config().firebase);


function getData (key, callback) {
  return firebase.database().ref(key).once('value').then(function(snapshot) {
    var value = snapshot.val();
    console.log(value);
    callback(value);
  });
}

function setData (key, data) {
    firebase.database().ref(key).set (
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
