'use strict'
const {  takeToken, AuthServise} = require('../services')
const authServise = new AuthServise()
module.exports = class UserAuth {
  authGET(req, res) {
    console.log('---- ', takeToken('ss', '1'))
  }

  loginPOST(req, res, next) {
    const { headers, method, url } = req
    req.getBody(body => {
      try{
        const { name, password, email} = JSON.parse(body)
        const regex = /[@]/
        if( name && password && email.match(regex)) {
          if(authServise.verificationPassword(password, email)){
            next()
            //res.write("Login successfully \n")
          } else {
            res.statusCode = 404
            res.write("Invalid password or login \n")
            res.end()
          }
        } else {
          res.statusCode = 404
          res.write("Authorization data is incorrect \n")
          res.end()
        }
      } catch(err) {
        res.statusCode = 404
        res.write("Authorization data is incorrect \n")
        res.end()
        console.error(err)
      }
    })
  }

  registerPOST(req, res) {
    /*const login = registerPayload.loing
    const email = registerPayload.email
    const password = registerPayload.password
    const login = registerPayload.payload*/
  }

  logoutGET(req, res){
    console.log(req.headers)
    console.log(req.url)
    console.log(req.url)
console.log()
    res.on("data", function (data) {
  responseString += data;
  // save all the data from response
});
res.on("end", function () {
  console.log(responseString)
  // print to console when response ends
});

    //const { emile, login } = req.query
    res.write(req.url + "hi 0001 \n")
    res.end()
  }
}

//module.exports = UserAuth
 //const t = new UserAuth()
 //t.test001()
