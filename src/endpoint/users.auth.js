"use strict";

const { UserAuth, jwtToken} = require('../controllers')
const { createNewTocken, verificationTheToken } = jwtToken
const userAuth = new UserAuth()

const test = (req, res) => {
  console.log("testGet", req.method, req.url);

  res.write(req.url + "hi 0001 \n");
  res.end();
}

module.exports =  (app) => {
  app.get('auth', userAuth.authGET)
  app.get('logout', userAuth.logoutGET)
  app.post('login', userAuth.loginPOST, createNewTocken)
  app.post('register', userAuth.registerPOST)
}

//const AuthApi = require('./users.auth')
//const test = new AuthApi
//test.auth('TEST')
