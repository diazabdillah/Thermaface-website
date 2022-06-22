
module.exports = {
  index: function(req, res) {
      res.render('index')
  },
  about: function(req, res) {
      res.render('about')
  },
  produk: function(req, res) {
    res.render('product')
},
testimoni: function(req, res) {
  res.render('testimoni')
},
faq: function(req, res) {
  res.render('faq')
},
contact: function(req, res) {
  res.render('contact')
},
login: function(req, res) {
  res.render('login')
},
}