var express = require('express');
var router = express.Router();

/* GET home page. */

var dataBike = [
  {name:"Marc Marquez", url:"/images/bike-1.jpg",price:"579"},
  {name:"Fabio Quartararo", url:"/images/bike-2.jpg",price:"679"},
  {name:"Michael Schumacher", url:"/images/bike-3.jpg",price:"779"},
  {name:"Lewis Hamilton", url:"/images/bike-4.jpg",price:"889"},
  {name:"Usain Bolt", url:"/images/bike-5.jpg",price:"999"},
  {name:"Christophe Lemaitre", url:"/images/bike-6.jpg",price:"1299"},
]



router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/home', function(req, res, next) {
  res.render('home');
});

router.get('/index', function(req, res, next) {
  res.render('index');
});

router.get('/shop', function(req, res, next) {
  res.render('shop');
});

module.exports = router;