
const conn = require ('./config/dbconn.js');
const md5 = require('md5');

function createUser (email, password, name, imageUrl, username, callback) {

  conn.getData ('users/' + username + '/email', function (data) {
    if (!data) {
      conn.setData ('users/' + username, {
        email : email,
        password : md5(password),
        name : name,
        imageUrl : imageUrl
      });
      callback(true);
    } else {
      callback(false);
    }

  });

}

exports.createUser = createUser;
