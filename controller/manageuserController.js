const manage = require("../model/manageuser")

module.exports = {
  manage: function(req, res) {
      res.render('manageuser',{
        layout: 'layouts/main',
      })
  },
 
}