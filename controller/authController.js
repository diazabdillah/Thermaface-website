const Auth = require("../model/auth")

module.exports = {
  login: function(req, res) {
      res.render('login',{
        layout: 'auth/main-auth',
      })
  },
  register: function(req, res) {
    res.render('register')
},
}