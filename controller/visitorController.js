const visitor = require("../model/visitor")

module.exports = {
  visitor: function(req, res) {
      res.render('visitor',{
        layout: 'layouts/main',
      })
  },
 
}