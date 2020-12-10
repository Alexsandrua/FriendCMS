"use strict";

const { verificationTheToken } = require('../controllers').jwtToken

const test = (req, res) => {
  console.log("testGet", req.method, req.url);
//  console.log(app.log);
  res.write(req.url + "Hi the test message \n");
  res.end();
}

module.exports = (app) => {
  app.get('profile', verificationTheToken, test)
}

//const AuthApi = require('./users.auth')
//const test = new AuthApi
//test.auth('TEST')
