/**
 * Created by Salehin Rocky on 1/8/2017.
 */

var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyASjqp-XV7Ti41d2NZZQMVYV86SAAvVOuA",
    authDomain: "my-first-app-71e57.firebaseapp.com",
    databaseURL: "https://my-first-app-71e57.firebaseio.com",
    storageBucket: "my-first-app-71e57.appspot.com",
    messagingSenderId: "762703160125"
};
var app = firebase.initializeApp(config);
// Get a reference to the database service
var databaseConnection = app.database();

var ref = firebase.database().ref('/users/').limitToFirst(1);

ref.on("value", function(snapshot) {
    console.log(snapshot.val());
}, function (error) {
    console.log("Error: " + error.code);
});

function writeUserData(db,userId, name, email, imageUrl) {
    db.ref('users/' + userId).set({
        userId:userId,
        username: name,
        email: email,
        profile_picture : imageUrl
    });
}
writeUserData(databaseConnection,'2','Rocky','rocky@gmail.com','rehll');

var updateObj={
    userId:'2',
    username : "rocky",
    email : "andkd@gmail.com",
    profile_picture : "rofile_picture"
}

var userId = '1';
function readData(userId) {
    return databaseConnection.ref('/users/' + userId).once('value').then(function(snapshot) {
        snapshot.forEach(function(logArrayElements){
           console.log(logArrayElements.val().username);
        });

       /* var username = snapshot.val().username;
        var email = snapshot.val().email;
        var profile_picture = snapshot.val().profile_picture;
        console.log(username);
        console.log(email);
        console.log(profile_picture);*/
    });
}

//update database
//databaseConnection.ref('/users/' + userId).update(updateObj);
//remove database
//databaseConnection.ref('/users/' + userId).remove();



    