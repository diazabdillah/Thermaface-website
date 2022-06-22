const profile = require("../model/profile")

module.exports = {
  profile: function(req, res) {
      res.render('profile',{
        layout: 'layouts/main',
      })
  },
 
}