const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const app = express()
const port = 3000
var methodOverride = require("method-override")
const path = require("path")
const con = require("./config/db.js")



app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs");
app.use(expressLayouts);
app.use(express.static('public'));
app.use('/css', express.static(__dirname = 'public/css'));
app.use('/js', express.static(__dirname = 'public/js'));
app.use('/img', express.static(__dirname = 'public/img'));
app.use('/vendor', express.static(__dirname = 'public/vendor'));


// connecting route to database
app.use(function(req, res, next) {
  req.con = con
  next()
})

// parsing body request
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

// routing
const homeRouter = require("./routes/homeRouter")
const userRouter = require("./routes/userRouter")
const visitorRouter = require("./routes/visitorRouter")
const dashboardRouter = require("./routes/dashboardRouter")
const profileRouter = require("./routes/profileRouter")
const presensiRouter = require("./routes/presensiRouter")
const deviceRouter = require("./routes/deviceRouter")
const memberRouter = require("./routes/memberRouter")
const manageuserRouter = require("./routes/manageuserRouter")
app.use("/", homeRouter)
app.use("/", userRouter)
app.use("/", visitorRouter)
app.use("/", dashboardRouter)
app.use("/", profileRouter)
app.use("/", presensiRouter)
app.use("/", deviceRouter)
app.use("/", memberRouter)
app.use("/", manageuserRouter)


// app.get('/', (req, res) => {
//   res.render('index',{
//     layout: 'layouts/main',
//     title: 'Thermaface',
//   });
// })

// app.get('/about', (req, res) => {
//   res.render('about',{
//     layout: 'layouts/main',
//     title: 'Thermaface',
//   });
// })
// app.get('/contact', (req, res) => {
//   res.render('contact',{
//     layout: 'layouts/main',
//     title: 'Thermaface',
//   });
// })
// app.get('/product', (req, res) => {
//   res.render('product',{
//     layout: 'layouts/main',
//     title: 'Thermaface',
//   });
// })

// app.get('/testimoni', (req, res) => {
//   res.render('testimoni',{
//     layout: 'layouts/main',
//     title: 'Thermaface',
//   });
// })
// app.get('/faq', (req, res) => {
//   res.render('faq',{
//     layout: 'layouts/main',
//     title: 'Thermaface',
//   });
// })


// app.get('/login', (req, res) => {
//   res.render('login',{
//     layout: 'partials/main-partials',

//   });
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})