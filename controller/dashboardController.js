const dashboard = require("../model/dashboard")

module.exports = {
  dashboard: function(req, res) {
      res.render('dashboard',{
        layout: 'layouts/main',
      })
  },
 
}