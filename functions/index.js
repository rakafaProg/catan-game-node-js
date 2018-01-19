
  const functions = require('firebase-functions');
  const express = require('express');
  const data = require('./config/dbconn.js');
  const hbs = require('hbs');

  const app = express();
  app.set('view engine', 'hbs');
  app.set('views', './views');

  hbs.registerPartials('./views/partials');


  app.get('/', (request, response) => {
    data.getData('facts').then(facts=>{
      response.render('log-in', {});
    });
  });

  exports.app = functions.https.onRequest(app);
