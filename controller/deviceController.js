const device = require("../model/device")

module.exports = {
  device: function(req, res) {
      res.render('device',{
        layout: 'layouts/main',
      })
  },
 
}