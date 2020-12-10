'use strict'

module.exports = (app) => {
  require('./users.auth')(app)
  require('./user.profile')(app)
}
