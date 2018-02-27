

    const functions = require('firebase-functions');
    const express = require('express');
    const app = express();
    const user = require('./user.js');


    app.set('trust proxy', 1) // trust first proxy

    const hbs = require('hbs');
    app.set('view engine', 'hbs');
    app.set('views', './views');


    app.post('/create', function (req, res, next){
      console.log('===============  Creating User  =================');
      user.createUser (
        'player@gmail.com',
        'abcd1234',
        'The Best Player Ever',
        'https://i.imgur.com/gdEKiSF.jpg',
        'thisismyname',
        function (result) {
          res.end(result);
        }
      );

    });

    app.get ('/signout', function (req, res, next) {
      console.log('============= User signed out =============');
      res.render('signout', {});
    });

    app.get ('/login', function (req, res, next) {
      console.log('============= User Want to LogIn =============');
      res.render('login', {});
    });

    app.use(function(req, res, next) {
        res.status(404).render('404', {})
    });


    exports.app = functions.https.onRequest(app);




















  //
  // // index.js
  //
  //
  // const functions = require('firebase-functions');
  // const firebase = require('firebase-admin');
  // const express = require('express');
  // const app = express();
  //
  // const serviceAccount = require("./serviceAccountKey.json");
  //
  // const firebaseApp = firebase.initializeApp({
  //     credential: firebase.credential.cert(serviceAccount),
  //     databaseURL: "https://the-settlers-of-catan.firebaseio.com"
  // });
  //
  // function sighIn (email, pass) {
  //
  // }
  //
  // function register(email, pass) {
  //   firebase.auth().createUser({
  //   email: "user@exaple.com",
  //   emailVerified: false,
  //   phoneNumber: "+11234567896",
  //   password: "secretPassword",
  //   displayName: "John Doe",
  //   photoURL: "http://www.example.com/12345678/photo.png",
  //   disabled: false
  // })
  //   .then(function(userRecord) {
  //     // See the UserRecord reference doc for the contents of userRecord.
  //     console.log("Successfully created new user:", userRecord.uid);
  //   })
  //   .catch(function(error) {
  //     console.log("Error creating new user:", error);
  //   });
  // }
  //
  //
  //
  // //auth.onAuthStateChange(firebaseUser => {
  // //  // If the user is loging in -
  // //  // firebaseUser will have the user data.
  // //  // If the user is loging out -
  // //  // firebaseUser will be null.
  // //  console.log(firebaseUser);
  // //});
  //
  //
  //
  //
  // app.get('/register', (req, res) =>  {
  //   register('ra@g.c', 'abcd1234');
  //   res.send('registered rakafa');
  // });
  //
  // app.get('/signout', (req, res) =>  {
  //   auth.signOut();
  //   res.send('registered rakafa');
  // });
  //
  // app.get('/', (req, res) =>  {
  //   firebase.auth().signInWithEmailAndPassword("user@exaple.com", "secretPassword").catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     console.log(error.message);
  //     var errorMessage = error.message;
  //     // ...
  //   })
  //   console.log("==================== User: ============");
  //   console.log(firebase.UserInfo);
  //   console.log("====================  ============");
  //   // firebase.auth().currentUser.getIdToken(/* forceRefresh */ false)
  //   // .then(function(idToken) {
  //   //   console.log(idToken);
  //   // }).catch(function(error) {
  //   //   console.log(error);
  //   // });
  //   res.send('registered rakafa');
  // });
  //
  //
  //


//  exports.app = functions.https.onRequest(app);
