const member = require("../model/member")

module.exports = {
  member: function(req, res) {
      res.render('member',{
        layout: 'layouts/main',
      })
  },
 
}