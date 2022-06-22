const profile = require("../model/profile")

module.exports = {
  presensi: function(req, res) {
      res.render('presensi',{
        layout: 'layouts/main',
      })
  },
 
}