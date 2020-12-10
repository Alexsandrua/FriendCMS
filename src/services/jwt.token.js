'ude strict'
const fs = require('fs')
const jwt = require('jsonwebtoken')

// PRIVATE and PUBLIC key
//const privateKEY = fs.readFileSync('../secret/private.key', 'utf8')
//const publicKEY = fs.readFileSync('../secret/public.key', 'utf8')

const otion = {
  //issuer: "Authorization/Resource/This server",
  //subject: "iam@user.me", //email
  //audience: "Client_Identity", // login
  expiresIn:  "12h",
  algorithm:  "RS256",
 }

module.exports.createNewTocken = (name,  email) => {
  const privateKey = fs.readFileSync('./secret/private.key', 'utf8')
  //otion.subject = email
  //otion.audience = name
  //PAYLOAD after save db
  let payload = {
   data1: "Data 1",
   data2: "Data 2",
   data3: "Data 3",
   data4: "Data 4",
  };
  token = jwt.sign(payload, privateKey, otion)
  return token
}

module.exports.verificationTheToken = (token) => {
  const publicKey = fs.readFileSync('./secret/public.key', 'utf8')
  let t = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhMSI6IkRhdGEgMSIsImRhdGEyIjoiRGF0YSAyIiwiZGF0YTMiOiJEYXRhIDMiLCJkYXRhNCI6IkRhdGEgNCIsImlhdCI6MTYwNzYxNjc0MywiZXhwIjoxNjA3NjU5OTQzfQ.YVQwyHpXD-j6H_yInZ1FNkq-bt23JaRkGX_q_9QR3q50cPkc7k1DAc2rJm_xCf-4Ke4XYfgGWtkoblde9RcXxQ'
  try {
    return jwt.verify(token.split(' ')[1], publicKey, otion)
  } catch (err) {
    return false
  }
}
