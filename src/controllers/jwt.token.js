'use strict'

const { createNewTocken, verificationTheToken } = require('../services').takeToken

module.exports.createNewTocken = (req, res) => {
  const { name, password, email} = JSON.parse(req.body)
  const token = createNewTocken(name,  email)
  res.setHeader('Authorization', `Bearer ${token}`)
  if(!req.headers.hasOwnProperty('Cookie'))
  res.setHeader('Set-Cookie', [`item1=${token}`])
  res.write("Login successfully \n")
  res.end()
}

module.exports.verificationTheToken = (req, res, next) => {
  if(req.headers.hasOwnProperty('Authorization') || req.headers.hasOwnProperty('authorization')){
    if(verificationTheToken(req.headers.authorization)) {
      next()
      return false
    } else {
      res.statusCode = 404
      res.end()
    }
  } else {
    res.statusCode = 404
    res.end()
  }
}
