
module.exports = {
  index: function(req, res) {
      res.render('index',{
        layout: 'partials/main-home',
      })
  },
  about: function(req, res) {
      res.render('about',{
        layout: 'partials/main-home',
      })
  },
  produk: function(req, res) {
    res.render('product',{
      layout: 'partials/main-home',
    })
},
testimoni: function(req, res) {
  res.render('testimoni',{
    layout: 'partials/main-home',
  })
},
faq: function(req, res) {
  res.render('faq',{
    layout: 'partials/main-home',
  })
},
contact: function(req, res) {
  res.render('contact',{
    layout: 'partials/main-home',
  })
},
login: function(req, res) {
  res.render('login',{
    layout: 'partials/main-home',
  })
},
}