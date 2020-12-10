'use strict'
const { scryptSync } = require('crypto');

const { createNewTocken, verificationTheToken} = require('./jwt.token');

const salt = 'd7b335a743e4999c24d2ff6b5b8bb9bdd1a3d48f80027d94d4d9074745d6951cecfab3548e574353e7c29c1d23c6657e7e920795bfb9ae8c555423b72265751e'
const testPass = '8f5f67db011945637682f520ba48a75a54a334d3b1b7fb8c39e3f2bfecdb2102854108dd1a5779a0e4762da7ac8ed02c3ee7a700fe82f5abf9f10e15b3d39376'

module.exports = class AuthServise {
  test() {console.log('TEST')}
  login(name) {
    return verificationTheToken(token)
  }

  registerNewUser(loging, email, payload) {
    return createNewTocken(login,  email)
  }

  verificationPassword(password, email) {
    const key1 = scryptSync(password + ':' + email, salt, 64)
    if(testPass === key1.toString('hex'))
    return true
    else return false
  }

  savePassword(password, email) {
    return scryptSync(password + ':' + email, salt, 64).toString('hex')
  }
}
